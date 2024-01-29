'use server';

import { prisma } from '../lib/prisma';
import { revalidatePath } from 'next/cache';
import type { Products } from '@prisma/client';

export const getProducts = async (): Promise<Products[]> => {
  const products = await prisma.stocks.findMany({
    include: { product: true },
  });

  return products.map((i: any) => {
    return { id: i.product.id, name: i.product.name, qtd: i.qtd.toString() };
  });
};

export const addProduct = async (formData: any) => {
  const { name } = formData;

  await prisma.products.create({
    data: {
      name: name,
      stock: {
        create: {
          qtd: 0,
          centerId: 'clrtuoppk0002ugwc4sg2pv5h',
        },
      },
    },
  });
  revalidatePath('/admin/products/*');
};

export const getProductById = async (id: string): Promise<Products | null> => {
  const product = await prisma.products.findUnique({
    where: {
      id: id,
    },
  });

  return product;
};

export const editProduct = async (product: any) => {
  await prisma.products.update({
    data: product,
    where: {
      id: product.id,
    },
  });
  revalidatePath('/admin/products/*');
};

export const deleteProduct = async (id: string) => {
  await prisma.$transaction(async (tx) => {
    const stock: any = await tx.stocks.findFirst({
      where: {
        productId: id,
      },
    });

    await tx.stocks.delete({
      where: {
        id: stock.id,
      },
    });

    await tx.products.delete({
      where: {
        id: id,
      },
    });
  });
  revalidatePath('/admin/products/*');
};
