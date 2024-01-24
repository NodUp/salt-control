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
import { DatePicker } from '../ui/data-picker';

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
  tel: z
    .string()
    .transform((value) => value.replace(/\s+/g, ''))
    .pipe(z.string().min(14, { message: 'Tel: campo obrigatório !' })),
  cpf: z
    .string()
    .transform((value) => value.replace(/\s+/g, ''))
    .pipe(z.string().min(14, { message: 'Cpf: campo obrigatório !' })),
  city: z.string().min(1, { message: 'Cidade: campo obrigatório !' }),
  data_nascimento: z.coerce.date({
    errorMap: (issue, { defaultError }) => ({
      message:
        issue.code === 'invalid_date'
          ? 'Data: campo obrigatório !'
          : defaultError,
    }),
  }),
});

type Props = {
  user: any;
};

const cities = [
  { id: 1, name: 'Mossoró' },
  { id: 2, name: 'Angicos' },
];

function UserForm({ user }: Props) {
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
      city: user.city ? '1' : '',
      tel: user.tel ? user.tel : '',
      cpf: user.cpf ? user.cpf : '',
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    reset();
    setValue('tel', '');
    setValue('cpf', '');
    setValue('city', '');
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

          <Label className=''>Tel:</Label>

          <Input
            register={register}
            name='tel'
            errors={errors}
            placeholder='Telefone'
            variant='mask'
            mask='(99) 9 9999-9999'
          />

          <Label className=''>Cpf:</Label>

          <Input
            register={register}
            name='cpf'
            errors={errors}
            placeholder='Cpf'
            variant='mask'
            mask='999.999.999-99'
          />

          <Label className=''>Cidade:</Label>

          <SelectInput
            errors={errors}
            control={control}
            name='city'
            items={cities}
          />

          <Label className=''>Data:</Label>

          <DatePicker
            errors={errors}
            control={control}
            name='data_nascimento'
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
