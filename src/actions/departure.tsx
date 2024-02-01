'use server';

import { prisma } from '../lib/prisma';
import { revalidatePath } from 'next/cache';

export const addDeparture = async (formData: any) => {
  const {
    productId,
    departureDate,
    client,
    invoice,
    product_value,
    qtd,
    status,
    total,
  } = formData;

  await prisma.departuries.create({
    data: {
      productId,
      departureDate,
      client,
      invoice,
      value: product_value,
      qtd,
      status,
      total,
    },
  });
  revalidatePath('/admin/products/*');
};

export const updateDeparture = async (formData: any, id: string) => {
  const {
    productId,
    departureDate,
    client,
    invoice,
    product_value,
    qtd,
    status,
    total,
  } = formData;

  await prisma.departuries.update({
    where: {
      id,
    },
    data: {
      productId,
      departureDate,
      client,
      invoice,
      value: product_value,
      qtd,
      status,
      total,
    },
  });
  revalidatePath('/admin/products/*');
};

export const getDeparturies = async () => {
  const departuries = await prisma.departuries.findMany({
    include: {
      product: true,
    },
  });

  return departuries;
};

export const getDepartureById = async (id: string) => {
  const departure = await prisma.departuries.findUnique({
    where: {
      id: id,
    },
    include: {
      product: true,
    },
  });

  return departure;
};

export const deleteDeparture = async (id: string) => {
  await prisma.departuries.delete({
    where: {
      id,
    },
  });
  revalidatePath('/admin/products/*');
};
