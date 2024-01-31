import { DataTable } from '@/components/ui/data-table';
import PathComponent from '@/components/path-component';
import { columns } from '@/components/columns/columns-product-entries-table';
import { getEntries } from '@/actions/entry';

export default async function ProductEntries() {
  const entries = await getEntries();

  return (
    <div>
      <PathComponent />

      <div className='mt-4 flex justify-center'>
        <DataTable
          columns={columns}
          data={entries}
          addPath='/admin/products/productEntry/add'
        />
      </div>
    </div>
  );
}
