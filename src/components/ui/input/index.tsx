import * as React from 'react';

import { DefaultInput } from './default-input';
import { PasswordtInput } from './password-input';
import { EmailInput } from './email-input';

type Props = {
  className?: string;
  variant?: string;
};

const Input = ({ className, variant, ...props }: Props) => {
  if (variant === 'email') {
    return <EmailInput className={className} {...props} />;
  } else if (variant === 'password') {
    return <PasswordtInput className={className} {...props} />;
  } else {
    return <DefaultInput className={className} {...props} />;
  }
};

export { Input };
