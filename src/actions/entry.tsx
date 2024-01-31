'use server';

import { prisma } from '../lib/prisma';
import { revalidatePath } from 'next/cache';

export const addEntry = async (formData: any) => {
  const {
    productId,
    departureDate,
    arrivalDate,
    transportation,
    container,
    invoice,
    damage,
    status,
    qtd,
  } = formData;

  await prisma.entries.create({
    data: {
      productId,
      departureDate,
      arrivalDate,
      transportation,
      container,
      invoice,
      damage,
      status,
      qtd: parseInt(qtd.trim()),
    },
  });
  revalidatePath('/admin/products/*');
};

export const getEntries = async () => {
  const entries = await prisma.entries.findMany({
    include: {
      product: true,
    },
  });

  return entries;
};
