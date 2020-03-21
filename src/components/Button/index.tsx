import React, { FC, MouseEvent } from 'react';
import './style.scss';

interface IProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  [x: string]: any;
}

const Button: FC<IProps> = ({ children, onClick, ...rest }) => {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
