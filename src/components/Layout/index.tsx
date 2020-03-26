import React, { FC } from 'react';

import './style.scss';

import Nav from '../Nav';
import Footer from '../Footer';

const Layout: FC = ({ children }) => {
  return (
    <div className="layout page-container">
      <div className="content-wrap">
        <Nav />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
