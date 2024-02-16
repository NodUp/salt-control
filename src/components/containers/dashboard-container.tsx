'use client';

import { useEffect, useState } from 'react';
import { getSummaryProducts } from '@/actions/dashboard';
import { db } from '@/lib/firebase.js';
import { ref, onValue } from 'firebase/database';

export default function DashBoardContainer() {
  const [products, setProducts] = useState([]);

  const load = async () => {
    const products: any = await getSummaryProducts(new Date().getMonth());
    setProducts(products);
  };

  useEffect(() => {
    load();
    onValue(ref(db, 'operation/time'), (snapshot) => {
      //console.log(snapshot.val());
      load();
    });
  }, []);

  return (
    <div className='mx-auto flex flex-wrap justify-center gap-4 rounded-lg border p-8'>
      {products.map((i: any, index: any) => (
        <div key={index}>
          <div className='h-[320px] w-[300px] max-w-[300px] rounded-lg border p-4'>
            <div className='flex h-[80px] flex-col justify-between'>
              <span className='mx-auto mb-2 font-bold'>{i.name}</span>
              <span className='font-semibold text-green-700'>{`Total: ${i.total}`}</span>
            </div>
            <div className='mt-2 rounded-md border p-2'>
              <span className='font-semibold text-sky-800'>Entrada</span>
              <div className='flex flex-row gap-1'>
                <span>Flutuante:</span>
                <span>{i.entrada_flutuante}</span>
              </div>
              <div className='flex flex-row gap-1'>
                <span>Local:</span>
                <span>{i.entrada_local}</span>
              </div>
            </div>

            <div className='mt-4 rounded-md border p-2'>
              <span className='font-semibold text-red-800'>Saída</span>
              <div className='flex flex-row gap-1'>
                <span>Programada:</span>
                <span>{i.saida_programada}</span>
              </div>
              <div className='flex flex-row gap-1'>
                <span>Efetuada:</span>
                <span>{i.saida_efetivada}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
