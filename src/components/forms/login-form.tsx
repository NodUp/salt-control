'use client';

import { Title } from '@/components/ui/title';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input/index';
import { Container } from '../ui/containers/content-container';
import { GridContainer } from '../ui/containers/grid-container';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'E-mail: campo obrigatório !' })
    .email('E-mail: formato inválido'),
  senha: z.string().min(6, { message: 'Senha: campo obrigatório !' }),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    reset();
  };
  return (
    <Container>
      <div className='mb-4 flex border-b-2 p-2'>
        <Title className='mx-auto'>Login</Title>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <GridContainer>
          <Label className=''>Login:</Label>

          <Input
            register={register}
            name='email'
            errors={errors}
            placeholder='Email'
          />

          <Label className=''>Senha:</Label>

          <Input
            register={register}
            name='senha'
            errors={errors}
            placeholder='Senha'
            variant='password'
          />
        </GridContainer>

        <Button type='submit' variant='secondary'>
          Button
        </Button>
      </form>
    </Container>
  );
}
