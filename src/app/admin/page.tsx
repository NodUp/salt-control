import DashBoardContainer from '@/components/containers/dashboard-container';

export default function DashBoard() {
  return (
    <div className='m-auto flex h-[100%] w-[100%] flex-row gap-2 p-8'>
      <DashBoardContainer />
    </div>
  );
}
