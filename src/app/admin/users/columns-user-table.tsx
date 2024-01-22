'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import EditIcon from '@/assets/icons/edit-icon';
import TrashIcon from '@/assets/icons/trash-icon';

export type Users = {
  id: string;
  name: string;
  email: string;
  status: 'ativo' | 'pendente';
};

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const onDelete = () => {
        console.log('deletar usuário' + { ...row });
        console.log(row.original);
      };

      const onEdit = () => {
        console.log('editar usuário');
        console.log(row.original);
      };

      return (
        <div className='flex justify-center gap-2'>
          <Button
            variant='ghost'
            className='h-8 w-8 p-0'
            onClick={() => onEdit()}
          >
            <EditIcon />
          </Button>

          <Button
            variant='ghost'
            className='h-8 w-8 p-0'
            onClick={() => onDelete()}
          >
            <TrashIcon />
          </Button>
        </div>
      );
    },
  },
];
