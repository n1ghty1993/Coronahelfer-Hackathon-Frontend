import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Layout: FC = () => {
  return (
    <footer>
      <span>
        <Link to="/impressum">IMPRESSUM</Link> /{' '}
        <Link to="/privacy">PRIVACY</Link>
      </span>
    </footer>
  );
};

export default Layout;
