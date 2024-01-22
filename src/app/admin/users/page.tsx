import { DataTable } from '@/components/ui/data-table';
import { Users, columns } from '@/app/admin/users/columns-user-table';

async function getData(): Promise<Users[]> {
  return [
    {
      id: '728ed52f1',
      name: 'Felipe Lima Duarte',
      status: 'ativo',
      email: 'felipeduarte27@gmail.com',
    },
    {
      id: '728ed52f2',
      name: 'Maria',
      status: 'ativo',
      email: 'maria@example.com',
    },
    {
      id: '728ed52f3',
      name: 'Marcos',
      status: 'pendente',
      email: 'marcus@example.com',
    },
  ];
}

export default async function Users() {
  const data = await getData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
