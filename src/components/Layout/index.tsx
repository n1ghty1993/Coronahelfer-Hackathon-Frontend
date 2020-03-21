import React, { FC } from 'react';

import Nav from '../Nav';
import Footer from '../Footer';

interface IProps {
  authenticated: Boolean;
}

const Layout: FC<IProps> = ({ children, authenticated }) => {
  return (
    <div className="layout">
      <Nav authenticated={authenticated} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
