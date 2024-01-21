'use client';

import React, { useState } from 'react';
import Collapse from '../collapse';

const array = [
  { href: '/admin/dashboard/', title: 'Cadastrar' },
  { href: '/admin/dashboard/', title: 'Alterar' },
  { href: '/admin/dashboard/', title: 'Remover' },
];

const SideBar = () => {
  const [indexCollapse, setIndexCollapse] = useState(0);
  return (
    <div className='m-4 flex h-[50vh] w-[250px] flex-col rounded-lg border p-2'>
      <div className='mb-2 flex justify-center'>Menu</div>
      <Collapse
        items={array}
        title='Usuários'
        icon='person'
        index={1}
        indexCollapse={indexCollapse}
        setIndexCollapse={setIndexCollapse}
      />
      <Collapse
        items={[]}
        title='Produtos'
        index={2}
        indexCollapse={indexCollapse}
        setIndexCollapse={setIndexCollapse}
      />
    </div>
  );
};

export default SideBar;
