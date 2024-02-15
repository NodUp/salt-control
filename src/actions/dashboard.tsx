'use server';

import { prisma } from '../lib/prisma';

export const getSummaryProducts = async (month: number) => {
  const result = await prisma.$queryRaw`
  select s.qtd as total,
  pro.name as name,
  (select COALESCE(sum(qtd), 0) from "Entries" e where e."productId" = pro.id and e.status = 'TRANSIT' and EXTRACT(MONTH FROM e."arrivalDate") = 2) as entrada_flutuante,
  (select COALESCE(sum(qtd), 0) from "Entries" e where e."productId" = pro.id and e.status = 'LOCAL' and EXTRACT(MONTH FROM e."arrivalDate") = 2) as entrada_local,
  (select COALESCE(sum(qtd), 0) from "Departuries" d where d."productId" = pro.id and d.status = 'STARTED' and EXTRACT(MONTH FROM d."departureDate") = 2) as saida_programada,
  (select COALESCE(sum(qtd), 0) from "Departuries" d where d."productId" = pro.id and d.status = 'FINISHED' and EXTRACT(MONTH FROM d."departureDate") = 2) as saida_efetivada
  from "Products" pro inner join "Stocks" s on s."productId" = pro.id
  `;

  return result;
};
