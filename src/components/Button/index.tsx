import React, { FC, MouseEvent } from 'react';
import './style.scss';

interface IProps {
  isPrimary?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  [x: string]: any;
}

const Button: FC<IProps> = ({ children, onClick, isPrimary, ...rest }) => {
  return (
    <button className={isPrimary ? 'primary' : ''} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
