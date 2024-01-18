'use client';

import { Title } from '@/components/ui/title';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginForm() {
  return (
    <div className='mx-auto flex flex-col rounded-sm border border-gray-300 p-4'>
      <div className='mb-4 flex border-b-2 p-2'>
        <Title className='mx-auto'>Login</Title>
      </div>

      <div className='mb-4 grid w-80 grid-cols-[4rem,100fr] items-center gap-y-2'>
        <Label className=''>Login:</Label>

        <Input className='' />

        <Label className=''>Senha:</Label>

        <Input className='' />
      </div>

      <Button variant='secondary'>Button</Button>
    </div>
  );
}
