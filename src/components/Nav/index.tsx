import React, { FC, useContext } from 'react';
import './style.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { Auth, IAuthContext } from '../App';

const Nav: FC = () => {
  const auth: IAuthContext = useContext(Auth);
  const history = useHistory();

  const logout = () => {
    auth.logout();
    history.push('/login');
  };

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
          <Link to="/flyer">FLYER</Link>
        </li>
        <li>
          <Link to="/information">INFORMATIONEN</Link>
        </li>
        <li>
          <Link to="/contact">KONTAKT</Link>
        </li>
        <li className="login-btn">
          {auth.auth.authenticated ? (
            <button onClick={logout}>ABMELDEN</button>
          ) : (
            <Link to="/login">LOGIN</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
