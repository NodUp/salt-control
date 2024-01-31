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
import { addUser } from '@/actions/user-action';
import { SubmitButton } from '../ui/button/submit-button';
import { addEntry } from '@/actions/entry';
import { useToast } from '../ui/use-toast';

const schema = z.object({
  productId: z
    .string({
      required_error: 'Produto: campo obrigatório !',
    })
    .min(1, { message: 'Produto: campo obrigatório !' }),
  departureDate: z.coerce.date({
    errorMap: (issue, { defaultError }) => ({
      message:
        issue.code === 'invalid_date'
          ? 'Data de Saída: campo obrigatório !'
          : defaultError,
    }),
  }),
  arrivalDate: z.coerce.date({
    errorMap: (issue, { defaultError }) => ({
      message:
        issue.code === 'invalid_date'
          ? 'Data de Chegada: campo obrigatório !'
          : defaultError,
    }),
  }),
  transportation: z
    .string()
    .min(1, { message: 'Meio de Transporte: campo obrigatório !' }),
  container: z.string().min(1, { message: 'Container: campo obrigatório !' }),
  invoice: z.string().min(1, { message: 'Nota Fiscal: campo obrigatório !' }),
  damage: z.string().min(1, { message: 'Avaria: campo obrigatório !' }),
  status: z
    .string({
      required_error: 'Status: campo obrigatório !',
    })
    .min(1, { message: 'Status: campo obrigatório !' }),
  qtd: z.string().min(1, { message: 'Qtd: campo obrigatório !' }),
});

type Props = {
  entry: any;
  products: any;
};

const status = [
  { id: 'LOCAL', name: 'No Local' },
  { id: 'TRANSIT', name: 'Em trânsito' },
];

function AddProductEntryForm({ entry, products }: Props) {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const clear = () => {
    reset();
    setValue('qtd', '');
    setValue('productId', '');
    setValue('status', '');
  };

  const onSubmit = async (data: any) => {
    await addEntry(data);
    toast({
      title: 'Sucesso !',
      description: 'Dados cadastrados.',
      variant: 'constructive',
    });
    clear();
  };

  return (
    <Container className='mt-16 w-[500px]'>
      <div className='mb-4 flex border-b-2 p-2'>
        <Label variant='title' className='mx-auto mb-4'>
          Entrada no Centro de Distribuição
        </Label>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Label variant='subtitle'>Dados Gerais</Label>

        <GridContainer className='mb-8 mt-4'>
          <Label className=''>Produto:</Label>

          <SelectInput
            errors={errors}
            control={control}
            name='productId'
            items={products}
          />

          <Label className=''>Data de Saída:</Label>

          <DatePicker errors={errors} control={control} name='departureDate' />

          <Label className=''>Data de Chegada:</Label>

          <DatePicker errors={errors} control={control} name='arrivalDate' />

          <Label className=''>Meio de Transporte:</Label>

          <Input
            register={register}
            name='transportation'
            errors={errors}
            placeholder='Meio de Transporte'
          />

          <Label className=''>Container:</Label>

          <Input
            register={register}
            name='container'
            errors={errors}
            placeholder='Nome do Container'
          />

          <Label className=''>Nota Fiscal:</Label>

          <Input
            register={register}
            name='invoice'
            errors={errors}
            placeholder='Nota Fiscal'
          />

          <Label className=''>Avaria:</Label>

          <Input
            register={register}
            name='damage'
            errors={errors}
            placeholder='Avaria na Mercadoria'
          />

          <Label className=''>Qtd:</Label>

          <Input
            register={register}
            control={control}
            name='qtd'
            errors={errors}
            placeholder='Total'
            variant='mask'
            mask='99999999'
          />

          <Label className=''>Status:</Label>

          <SelectInput
            errors={errors}
            control={control}
            name='status'
            items={status}
          />
        </GridContainer>

        <SubmitButton variant='secondary' className='mb-4' text='Cadastrar' />
      </form>
    </Container>
  );
}

export default AddProductEntryForm;
