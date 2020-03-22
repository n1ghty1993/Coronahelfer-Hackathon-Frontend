import React, { FC, useContext, useState } from 'react';
import './style.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { Auth, IAuthContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

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
        {auth.auth.authenticated ? (
          // <button onClick={logout}>ABMELDEN</button>
          <ProfileDropdown logout={logout} />
        ) : (
          <li className="login-btn">
            <Link to="/login">LOGIN</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

interface IProfileDropdown {
  logout: Function;
}

const ProfileDropdown: React.FC<IProfileDropdown> = ({ logout }) => {
  const [open, setOpen] = useState(false);
  const auth: IAuthContext = useContext(Auth);

  return (
    <>
      <li className="menu-btn" onClick={() => setOpen(!open)}>
        <span>
          {auth.auth.firstname?.toLocaleUpperCase()}{' '}
          {auth.auth.lastname?.charAt(0).toLocaleUpperCase()}.
        </span>
        <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
        <ul className={`dropdown ${open ? '' : 'hidden'}`}>
          <li>PROFIL</li>
          <li>
            <Link to="/profile/requests">MEINE ANZEIGEN</Link>
          </li>
          <li onClick={() => logout()}>ABMELDEN</li>
        </ul>
      </li>
    </>
  );
};

export default Nav;
