'use client';

import { Container } from '../ui/containers/content-container';
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
import { editUser } from '@/actions/user-action';
const schema = z.object({
  name: z.string().min(1, { message: 'Nome: campo obrigatório !' }),
  email: z
    .string()
    .min(1, { message: 'E-mail: campo obrigatório !' })
    .email('E-mail: formato inválido'),
  password: z.string().optional(),
  confirm_password: z.string().optional(),
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
      name: user ? user.person[0].name : '',
      email: user ? user.email : '',
      role: user ? user.roleId : '',
    },
  });
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    if (!user) {
      addUser({
        ...data,
        roleId: data.role,
        status: 'ACTIVE',
      });
      setValue('role', '');
      reset();
    } else {
      await editUser(user.id, data);
    }

    toast({
      title: 'Sucesso !',
      description: 'Dados cadastrados.',
      variant: 'constructive',
    });
  };

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

          {!user ? (
            <>
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
            </>
          ) : null}
        </GridContainer>

        <SubmitButton
          variant='secondary'
          className='mb-4'
          text={user ? 'Atualizar' : 'Cadastrar'}
        />
      </form>
    </Container>
  );
}

export default UserForm;
