'use client';

import * as React from 'react';
import { useFormStatus } from 'react-dom';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 w-full',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 w-full',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground w-full',
        secondary: 'bg-sky-800 text-white hover:bg-sky-800/80 w-full',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  text: string;
}

const SubmitButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, text, asChild = false, ...props }, ref) => {
    const { pending } = useFormStatus();

    return (
      <button
        type='submit'
        aria-disabled={pending}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={pending}
      >
        {pending ? 'Enviando ...' : `${text}`}
      </button>
    );
  }
);

SubmitButton.displayName = 'SubmitButton';

export { SubmitButton, buttonVariants };
