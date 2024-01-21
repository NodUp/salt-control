import React from 'react';

type Props = {
  children: any;
};

const Container = ({ children }: Props) => {
  return (
    <div className='mx-auto flex flex-col rounded-sm border border-gray-300 p-4'>
      {children}
    </div>
  );
};

export { Container };
