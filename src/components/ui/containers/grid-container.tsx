import React from 'react';

type Props = {
  children: any;
};

const GridContainer = ({ children }: Props) => {
  return (
    <div className='mb-4 grid w-80 grid-cols-[4rem,100fr] items-center gap-y-2'>
      {children}
    </div>
  );
};

export { GridContainer };
