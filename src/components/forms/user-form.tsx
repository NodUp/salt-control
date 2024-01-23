'use client';

import { Container } from '../ui/containers/content-container';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { Label } from '../ui/label';
import { GridContainer } from '../ui/containers/grid-container';
import { Input } from '../ui/input/index';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
  name: z.string().min(1, { message: 'Nome: campo obrigatório !' }),
  email: z
    .string()
    .min(1, { message: 'E-mail: campo obrigatório !' })
    .email('E-mail: formato inválido'),
  password: z.string().min(6, { message: 'Senha: campo obrigatório !' }),
  confirm_password: z
    .string()
    .min(6, { message: 'Senha: campo obrigatório !' }),
});

type Props = {
  user: any;
};

function UserForm({ user }: Props) {
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
    //reset();
    //router.push('/admin');
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Container className='mt-16 w-[500px]'>
      <div className='mb-4 flex border-b-2 p-2'>
        <Label variant='title' className='mx-auto mb-4'>
          Cadastro de Usuário
        </Label>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Label variant='subtitle'>Dados Pessoais</Label>

        <GridContainer className='mb-8 mt-4'>
          <Label className=''>Nome:</Label>

          <Input
            register={register}
            name='name'
            errors={errors}
            placeholder='Nome'
          />

          <Label className=''>Email:</Label>

          <Input
            register={register}
            name='email'
            errors={errors}
            placeholder='Email'
            variant='email'
          />

          <Label className=''>Senha:</Label>

          <Input
            register={register}
            name='password'
            errors={errors}
            placeholder='Senha'
            variant='password'
          />

          <Label className=''>Senha:</Label>

          <Input
            register={register}
            name='confirm_password'
            errors={errors}
            placeholder='Senha'
            variant='password'
          />
        </GridContainer>

        <Button type='submit' variant='secondary' className='mb-4'>
          Cadastrar
        </Button>
      </form>
    </Container>
  );
}

export default UserForm;
