import { DataTable } from '@/components/ui/data-table';
import { Users, columns } from '@/components/columns/columns-user-table';
import PathComponent from '@/components/path-component';

let arrayData: Users[] = [
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

async function getData(): Promise<Users[]> {
  return arrayData;
}

export default async function Users() {
  const data = await getData();

  return (
    <div>
      <div className='p-1'>
        <PathComponent />
      </div>
      <div className='mt-4 flex justify-center'>
        <DataTable
          columns={columns}
          data={data}
          addPath='/admin/users/adduser'
        />
      </div>
    </div>
  );
}
