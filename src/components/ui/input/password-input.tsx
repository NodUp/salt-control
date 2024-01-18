import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordtInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-5 w-full rounded-lg border border-gray-400 px-2 text-zinc-600 outline-none focus:border-blue-300',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
PasswordtInput.displayName = 'PasswordtInput';

export { PasswordtInput };
