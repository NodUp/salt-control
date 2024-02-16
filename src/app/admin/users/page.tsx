import { DataTable } from '@/components/ui/data-table';
import { Users, columns } from '@/components/columns/columns-user-table';
import { findAllusers } from '@/actions/user-action';
import PathComponent from '@/components/path-component';

export default async function Users() {
  const data: any = await findAllusers();

  return (
    <div>
      <PathComponent />

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
