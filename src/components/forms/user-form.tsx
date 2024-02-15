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
import { SelectInput } from '../ui/select/select';
import { addUser } from '@/actions/user-action';
import { SubmitButton } from '../ui/button/submit-button';
import { useToast } from '../ui/use-toast';

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
  role: z.string().min(1, { message: 'Tipo: campo obrigatório !' }),
});

type Props = {
  user: any;
  roles: any;
};

function UserForm({ user, roles }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      role: user.roleId ? roles[0].id : '',
    },
  });
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    addUser({
      ...data,
      roleId: data.role,
      status: 'ACTIVE',
    });

    reset();
    setValue('role', '');

    toast({
      title: 'Sucesso !',
      description: 'Dados cadastrados.',
      variant: 'constructive',
    });
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

          <Label className=''>Login:</Label>

          <Input
            register={register}
            name='email'
            errors={errors}
            placeholder='Email'
            variant='email'
          />

          <Label className=''>Tipo:</Label>

          <SelectInput
            errors={errors}
            control={control}
            name='role'
            items={roles}
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

        <SubmitButton variant='secondary' className='mb-4' text='Cadastrar' />
      </form>
    </Container>
  );
}

export default UserForm;
