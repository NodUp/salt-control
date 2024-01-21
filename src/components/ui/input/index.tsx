'use client';

import * as React from 'react';

import { DefaultInput } from './default-input';
import { PasswordtInput } from './password-input';
import { EmailInput } from './email-input';

export type Props = {
  className?: string;
  variant?: string;
  name?: string;
  errors?: any;
  placeholder?: string;
  register?: any;
};

const Input = ({
  className,
  variant,
  name,
  errors,
  placeholder,
  register,
}: Props) => {
  if (variant === 'email') {
    return (
      <EmailInput
        className={className}
        name={name}
        errors={errors}
        placeholder={placeholder}
        register={register}
      />
    );
  } else if (variant === 'password') {
    return (
      <PasswordtInput
        className={className}
        name={name}
        errors={errors}
        placeholder={placeholder}
        register={register}
      />
    );
  } else {
    return (
      <DefaultInput
        className={className}
        name={name}
        errors={errors}
        placeholder={placeholder}
        register={register}
      />
    );
  }
};

export { Input };
