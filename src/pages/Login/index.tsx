import React, { useState } from 'react';
import Button from '../../components/Button';
import './style.scss';

export default function Authenticate() {
  return (
    <div className="authenticate">
      <div className="container">
        <Login />
        <p className="divider">ODER</p>
        <Register />
      </div>
    </div>
  );
}

function Login() {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const login = () => {};

  return (
    <form className="login">
      <input
        type="text"
        placeholder="Nutzername"
        onChange={e => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Passwort"
        onChange={e => setPassword(e.target.value)}
      />
      <Button onClick={login}>Login</Button>
    </form>
  );
}

function Register() {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const register = () => {};

  return (
    <form className="register">
      <div className="aligner">
        <div className="left">
          <div className="avatar" />
        </div>
        <div className="right">
          <input
            type="text"
            placeholder="Nutzername"
            onChange={e => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Passwort"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </div>
      <input
        type="text"
        placeholder="E-Mail"
        onChange={e => setMail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telefon"
        onChange={e => setPhone(e.target.value)}
      />
      <Button onClick={register}>Registrieren</Button>
    </form>
  );
}
