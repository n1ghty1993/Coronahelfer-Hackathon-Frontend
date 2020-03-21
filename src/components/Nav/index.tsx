import React, { FC, useContext } from 'react';
import './style.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { Auth } from '../App';

const Nav: FC = () => {
  const auth = useContext(Auth);

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
        <li className="login-btn">
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
