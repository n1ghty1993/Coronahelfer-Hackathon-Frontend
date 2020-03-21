import React, { FC } from 'react';

import Nav from '../Nav';
import Footer from '../Footer';

const Layout: FC = ({ children }) => {
  return (
    <div className="layout">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
