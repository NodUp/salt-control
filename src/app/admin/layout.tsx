import HeaderBar from '@/components/ui/containers/header-bar';
import SideBar from '@/components/ui/containers/side-bar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-screen bg-slate-100'>
      <HeaderBar />
      <div className='flex w-full flex-row'>
        <SideBar />
        <div className='m-4 h-[80vh] w-full shadow-lg'>
          <div className='h-[100%] w-full rounded-lg border bg-white p-4'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
