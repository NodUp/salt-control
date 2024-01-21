import Logo from '@/assets/logo';
import '../../styles/globals.css';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className='flex h-[100px] w-full flex-row items-center justify-between border shadow-xl'>
        <div className='flex w-[250px] items-center justify-center p-1'>
          <Link href='/admin/dashboard/'>
            <Logo />
          </Link>
        </div>
        <div className='flex w-[250px] items-center justify-center'>Menu</div>
      </div>
      <div className='flex w-full flex-row'>
        <div className='m-4 flex h-[50vh] w-[250px] rounded-lg border p-4'>
          Lista
        </div>
        <div className='m-4 h-[80vh] w-full'>
          <div className='flex h-[100%] w-full items-center justify-center rounded-lg border p-4'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
