import LoginForm from '@/components/forms/login-form';

import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex h-screen min-h-screen w-full items-center'>
      <div className='mx-auto flex flex-col'>
        <LoginForm />
        <div className='mt-4 flex justify-between'>
          <Link
            href='/signup/'
            className='font-semibold text-gray-400 hover:underline'
          >
            Cadastre-se
          </Link>
          <Link
            href='/forgotpassword/'
            className='font-semibold text-gray-400 hover:underline'
          >
            Esqueceu a senha?
          </Link>
        </div>
      </div>
    </main>
  );
}
