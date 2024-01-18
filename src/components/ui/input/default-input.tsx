import * as React from 'react';

import { cn } from '@/lib/utils';

type Props = {
  className?: string;
};

const DefaultInput = ({ className, ...props }: Props) => {
  return (
    <input
      className={cn(
        'flex h-10 w-full rounded-lg border border-gray-400 px-2 text-zinc-600 outline-none focus:border-blue-300',
        className
      )}
      {...props}
    />
  );
};

export { DefaultInput };
