import React, { FC } from 'react';
import './style.scss';

interface IProps {}

const Header: FC<IProps> = ({ children }) => {
  return <header>{children}</header>;
};

export default Header;
