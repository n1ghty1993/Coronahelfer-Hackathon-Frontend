import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Nav from '../Nav';
import Routes from '../Routes';
import Footer from '../Footer';

interface IProps {
  authenticated: Boolean;
}

const Layout: FC<IProps> = ({ children, authenticated }) => {
  return (
    <BrowserRouter>
      <div className="layout">
        <Nav authenticated={authenticated} />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
