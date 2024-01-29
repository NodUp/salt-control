'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import EditIcon from '@/assets/icons/edit-icon';
import { useRouter } from 'next/navigation';
import { Alert } from '../ui/alert';
import { deleteProduct } from '@/actions/products';

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'transportation',
    header: 'Transporte',
  },
  {
    accessorKey: 'arrivalDate',
    header: 'Chegada',
  },
  {
    accessorKey: 'departureDate',
    header: 'Saída',
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
