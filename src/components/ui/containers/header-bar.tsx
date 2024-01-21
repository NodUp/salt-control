import React from 'react';

import Avatar from '@/assets/avatar';
import Logo from '@/assets/logo';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const HeaderBar = () => {
  return (
    <div className='flex h-[100px] w-full flex-row items-center justify-between border shadow-xl'>
      <div className='flex w-[250px] items-center justify-center p-1'>
        <Link href='/admin/dashboard/'>
          <Logo />
        </Link>
      </div>
      <div className='flex w-[250px] items-center justify-center'>
        <DropdownMenu>
          <DropdownMenuTrigger className='p-2 outline-none'>
            <span className='h-[80px] w-[30px]'>
              <Avatar />
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Meu Perfil</DropdownMenuItem>
            <DropdownMenuItem>Alterar senha</DropdownMenuItem>
            <Link href='/'>
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default HeaderBar;
