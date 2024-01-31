'use server';

import { prisma } from '../lib/prisma';
import { revalidatePath } from 'next/cache';

export const addEntry = async (formData: any) => {
  const {
    productId,
    departureDate,
    arrivalDate,
    transportation,
    container,
    invoice,
    damage,
    status,
    qtd,
  } = formData;

  await prisma.entries.create({
    data: {
      productId,
      departureDate,
      arrivalDate,
      transportation,
      container,
      invoice,
      damage,
      status,
      qtd: parseInt(qtd.trim()),
    },
  });
  revalidatePath('/admin/products/*');
};

export const updateEntry = async (formData: any, id: string) => {
  const {
    productId,
    departureDate,
    arrivalDate,
    transportation,
    container,
    invoice,
    damage,
    status,
    qtd,
  } = formData;

  await prisma.entries.update({
    where: {
      id,
    },
    data: {
      productId,
      departureDate,
      arrivalDate,
      transportation,
      container,
      invoice,
      damage,
      status,
      qtd: parseInt(qtd.trim()),
    },
  });
  revalidatePath('/admin/products/*');
};

export const getEntries = async () => {
  const entries = await prisma.entries.findMany({
    include: {
      product: true,
    },
  });

  return entries;
};

export const getEntryById = async (id: string) => {
  const entry = await prisma.entries.findUnique({
    where: {
      id: id,
    },
    include: {
      product: true,
    },
  });

  return entry;
};

export const deleteEntry = async (id: string) => {
  await prisma.entries.delete({
    where: {
      id,
    },
  });
  revalidatePath('/admin/products/*');
};
