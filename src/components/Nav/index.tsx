import React, { FC } from 'react';
import './style.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';

interface IProps {
  authenticated: Boolean;
}

const Nav: FC<IProps> = ({ authenticated }) => {
  return (
    <nav>
      <Link to="/">
        <Logo id={'logo'} />
      </Link>
      <ul className="actions">
        <li>
          <Link to="/help">HELFEN</Link>
        </li>
        <li>
          <Link to="/get-help">HILFE BEKOMMEN</Link>
        </li>
        <li>
          <Link to="/information">INFORMATIONEN</Link>
        </li>
        <li>
          <Link to="/contact">KONTAKT</Link>
        </li>
        <li className="login-btn">LOGIN</li>
      </ul>
    </nav>
  );
};

export default Nav;
