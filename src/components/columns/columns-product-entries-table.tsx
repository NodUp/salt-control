'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import EditIcon from '@/assets/icons/edit-icon';
import { useRouter } from 'next/navigation';
import { Alert } from '../ui/alert';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { deleteEntry } from '@/actions/entry';

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
    enableGlobalFilter: true,
    accessorFn: (row) => {
      return row.product.name;
    },
  },
  {
    accessorKey: 'transportation',
    header: 'Transporte',
    enableGlobalFilter: true,
  },
  {
    enableGlobalFilter: true,
    header: 'Chegada',
    accessorFn: (row) => {
      return format(row.arrivalDate, 'dd/MM/yyyy', {
        locale: ptBR,
      }).toString();
    },
  },
  {
    accessorKey: 'departureDate',
    enableGlobalFilter: true,
    header: 'Saída',
    accessorFn: (row) => {
      return format(row.departureDate, 'dd/MM/yyyy', {
        locale: ptBR,
      }).toString();
    },
  },
  {
    accessorKey: 'container',
    header: 'Container',
    enableGlobalFilter: true,
  },
  {
    accessorKey: 'qtd',
    header: 'Quantidade',
    enableGlobalFilter: true,
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();

      const onDelete = () => {
        const { id }: any = row.original;
        deleteEntry(id);
      };

      const onEdit = () => {
        router.push(`/admin/products/productEntry/edit/${row.original.id}`);
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
              title='Deseja excluir essa entrada?'
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
