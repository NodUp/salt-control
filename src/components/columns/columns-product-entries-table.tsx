'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import EditIcon from '@/assets/icons/edit-icon';
import { useRouter } from 'next/navigation';
import { Alert } from '../ui/alert';
import { deleteProduct } from '@/actions/products';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
//import { utcToZonedTime } from 'date-fns-tz';

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
    cell: ({ row }) => {
      return (
        <>
          <div>
            <span>{row.original.product.name}</span>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: 'transportation',
    header: 'Transporte',
  },
  {
    accessorKey: 'arrivalDate',
    header: 'Chegada',
    cell: ({ row }) => {
      const formatoBrasileiro = 'dd/MM/yyyy';
      const dataFormatada = format(
        row.original.arrivalDate,
        formatoBrasileiro,
        { locale: ptBR }
      );
      return (
        <>
          <div>
            <span>{dataFormatada.toString()}</span>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: 'departureDate',
    header: 'Saída',
    cell: ({ row }) => {
      const formatoBrasileiro = 'dd/MM/yyyy';
      const dataFormatada = format(
        row.original.departureDate,
        formatoBrasileiro,
        { locale: ptBR }
      );

      return (
        <>
          <div>
            <span>{dataFormatada.toString()}</span>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: 'container',
    header: 'Container',
  },
  {
    accessorKey: 'qtd',
    header: 'Quantidade',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();

      const onDelete = () => {
        const { id }: any = row.original;
        deleteProduct(id);
      };

      const onEdit = () => {
        router.push(`/admin/products/editProduct/${row.original.id}`);
      };

      return (
        <>
          <div className='flex justify-center gap-2'>
            <Button
              variant='ghost'
              className='h-8 w-8 p-0'
              onClick={() => onEdit()}
            >
              <EditIcon />
            </Button>

            <Alert
              title='Deseja excluir o produto?'
              text='A operação não poderá ser desfeita'
              type='delete'
              onDelete={onDelete}
            />
          </div>
        </>
      );
    },
  },
];
