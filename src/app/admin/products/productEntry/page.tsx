import { DataTable } from '@/components/ui/data-table';
import PathComponent from '@/components/path-component';
import { columns } from '@/components/columns/columns-product-entries-table';

export default async function ProductEntries() {
  //const data: Products[] = await getProducts();

  return (
    <div>
      <PathComponent />

      <div className='mt-4 flex justify-center'>
        <DataTable
          columns={columns}
          data={[]}
          addPath='/admin/products/productEntry/add'
        />
      </div>
    </div>
  );
}
