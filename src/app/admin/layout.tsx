import HeaderBar from '@/components/ui/containers/header-bar';
import SideBar from '@/components/ui/containers/side-bar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <HeaderBar />
      <div className='flex w-full flex-row'>
        <SideBar />
        <div className='m-4 h-[80vh] w-full'>
          <div className='flex h-[100%] w-full items-center justify-center rounded-lg border p-4'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
