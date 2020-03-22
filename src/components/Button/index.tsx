import React, { FC, MouseEvent } from 'react';
import './style.scss';

interface IProps {
  isPrimary?: boolean;
  size?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  [x: string]: any;
}

const Button: FC<IProps> = ({
  children,
  onClick,
  isPrimary,
  size,
  ...rest
}) => {
  const className = `${isPrimary ? 'primary' : ''} ${size || ''}`;
  return (
    <button className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
