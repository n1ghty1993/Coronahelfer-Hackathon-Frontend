import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <ul>
      <li>
        <Link to="/">Helfen</Link>
      </li>
      <li>
        <Link to="/get-help">Hilfe bekommen</Link>
      </li>
      <li>
        <Link to="/information">Informationen</Link>
      </li>
      <li>
        <Link to="/contact">Kontakt</Link>
      </li>
      <li>
        <Link to="/login">
          <button>
            <span>Login</span>
          </button>
        </Link>
      </li>
    </ul>
  );
}
