import PathComponent from '@/components/path-component';
import AddProductEntryForm from '@/components/forms/product-entry-form';

export default async function AddProduct() {
  return (
    <div>
      <PathComponent />
      <AddProductEntryForm entry={null} />
    </div>
  );
}
