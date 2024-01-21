import * as React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { cn } from '@/lib/utils';

import { Props } from './index';

const DefaultInput = ({
  className,
  name,
  errors,
  placeholder,
  register,
}: Props) => {
  return (
    <div>
      <input
        className={cn(
          'flex h-10 w-full rounded-lg border border-gray-400 px-2 text-zinc-600 outline-none focus:border-blue-300',
          className
        )}
        {...register(`${name}`)}
        id={name}
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage
        errors={errors}
        name={`${name}`}
        render={({ message }: { message: string }) => (
          <p className='mt-2 text-sm text-red-700'>{message}</p>
        )}
      />
    </div>
  );
};

export { DefaultInput };
