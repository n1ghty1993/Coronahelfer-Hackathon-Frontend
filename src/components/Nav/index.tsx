import React, { FC } from 'react';
import './style.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';

interface IProps {
  authenticated: Boolean;
}

const Nav: FC<IProps> = ({ authenticated }) => {
  return (
    <nav>
      <Logo id={'logo'} />
      <ul className="actions">
        <li>HELFEN</li>
        <li>HILFE BEKOMMEN</li>
        <li>INFORMATIONEN</li>
        <li>KONTAKT</li>
        <li className="login-btn">LOGIN</li>
      </ul>
    </nav>
  );
};

export default Nav;
