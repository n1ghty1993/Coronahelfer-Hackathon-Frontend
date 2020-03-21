import React, { FC } from 'react';
import './style.scss';

interface IProps {}

const Body: FC<IProps> = ({ children }) => {
  return <div className="body">{children}</div>;
};

export default Body;
