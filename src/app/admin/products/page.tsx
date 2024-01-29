import { DataTable } from '@/components/ui/data-table';
import PathComponent from '@/components/path-component';
import { Products, columns } from '@/components/columns/columns-products-table';
import { getProducts } from '@/actions/products';

export default async function Products() {
  const data: Products[] = await getProducts();

  return (
    <div>
      <PathComponent />

      <div className='mt-4 flex justify-center'>
        <DataTable
          columns={columns}
          data={data}
          addPath='/admin/products/addProduct'
        />
      </div>
    </div>
  );
}
