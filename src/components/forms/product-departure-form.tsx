/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Container } from '../ui/containers/content-container';
import { Label } from '../ui/label';
import { GridContainer } from '../ui/containers/grid-container';
import { Input } from '../ui/input/index';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SelectInput } from '../ui/select/select';
import { DatePicker } from '../ui/data-picker';
import { SubmitButton } from '../ui/button/submit-button';
import { addDeparture } from '@/actions/departure';
import { useToast } from '../ui/use-toast';
import { updateDeparture } from '@/actions/departure';

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
  client: z.string().min(1, { message: 'Cliente: campo obrigatório !' }),
  invoice: z.string().min(1, { message: 'Nota Fiscal: campo obrigatório !' }),
  product_value: z
    .string({
      required_error: 'Valor: campo obrigatório !',
    })
    .min(1, { message: 'Valor: campo obrigatório !' }),
  qtd: z.string().min(1, { message: 'Qtd: campo obrigatório !' }),
  status: z
    .string({
      required_error: 'Status: campo obrigatório !',
    })
    .min(1, { message: 'Status: campo obrigatório !' }),
});

type Props = {
  departure: any;
  products: any;
};

const status = [
  { id: 'STARTED', name: 'Iniciado' },
  { id: 'FINISHED', name: 'Finalizado' },
];

function AddProductDepartureForm({ departure, products }: Props) {
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
    defaultValues: {
      status: departure ? departure.status : '',
      qtd: departure ? departure.qtd : '',
      invoice: departure ? departure.invoice : '',
      client: departure ? departure.client : '',
      product_value: departure ? departure.value : '',
      productId: departure ? departure.product.id : '',
      departureDate: departure ? departure.departureDate : '',
    },
  });

  const clear = () => {
    reset();
    setValue('qtd', '');
    setValue('productId', '');
    setValue('status', '');
  };

  const onSubmit = async (data: any) => {
    const productValue =
      parseFloat(data.product_value.replace(/R\$\s/g, '').replace(',', '.')) *
      10;

    const qtdProduct = parseFloat(data.qtd.trim());

    const total = productValue * qtdProduct;

    if (departure) {
      await updateDeparture(
        {
          ...data,
          product_value: productValue,
          qtd: qtdProduct,
          total: total,
        },
        departure.id
      );
    } else {
      await addDeparture({
        ...data,
        product_value: productValue,
        qtd: qtdProduct,
        total: total,
      });
      clear();
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
          Saída do Centro de Distribuição
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

          <Label className=''>Cliente:</Label>

          <Input
            register={register}
            name='client'
            errors={errors}
            placeholder='Nome'
          />

          <Label className=''>Nota Fiscal:</Label>

          <Input
            register={register}
            name='invoice'
            errors={errors}
            placeholder='Nota Fiscal'
          />

          <Label className=''>Valor:</Label>

          <Input
            control={control}
            register={register}
            name='product_value'
            errors={errors}
            placeholder='Valor unitário'
            variant='currency'
          />

          <Label className=''>Qtd:</Label>

          <Input
            register={register}
            control={control}
            name='qtd'
            errors={errors}
            placeholder='Quantidade'
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

        <SubmitButton
          variant='secondary'
          className='mb-4'
          text={departure ? 'Atualizar' : 'Cadastrar'}
        />
      </form>
    </Container>
  );
}

export default AddProductDepartureForm;
