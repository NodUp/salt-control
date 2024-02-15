import DashBoardContainer from '@/components/containers/dashboard-container';
import { getSummaryProducts } from '@/actions/dashboard';

export default async function DashBoard() {
  const products = await getSummaryProducts(new Date().getMonth());

  return (
    <div className='m-auto flex h-[100%] w-[100%] flex-col'>
      <div className='my-4 flex justify-center rounded-lg border'>
        <span className='text-2xl font-semibold'>
          Mês de {new Date().toLocaleString('default', { month: 'long' })}
        </span>
      </div>
      <DashBoardContainer products={products} />
    </div>
  );
}
