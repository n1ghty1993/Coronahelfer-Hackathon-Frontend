import React, { FC, useState, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../../components/Button';
import { Auth, IAuthContext } from '../../components/App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

interface ILoginState {
  from: string;
}

const Authenticate: FC<RouteComponentProps<{}, {}, ILoginState>> = props => {
  return (
    <div className="authenticate">
      <div className="container">
        <Login history={props.history} />
        <p className="divider">ODER</p>
        <Register />
      </div>
    </div>
  );
};
export default Authenticate;

const Login: FC<{ history: any }> = ({ history }) => {
  const auth: IAuthContext = useContext(Auth);
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  const login = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (name === '' || password === '')
        throw new Error('Fields cant be empty.');
      let res: any = await fetch('http://localhost:3000/api/v1/auth/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: name,
          password: password,
        }),
      });

      res = await res.json();

      if (res.error) throw new Error(res.error);
      if (!res.token) throw new Error('No token provided.');

      // TODO: local or sessionstorage?
      window.localStorage.setItem('coronahelp-token', res.token);

      let me: any = await fetch('http://localhost:3000/api/v1/users/me', {
        headers: {
          'Content-Type': 'application/json',
          'X-Access-Token': window.localStorage.getItem(
            'coronahelp-token',
          ) as string,
        },
      });

      me = await me.json();

      if (me.error) throw new Error('Token invalid.');

      auth.set({
        authenticated: true,
        firstname: res.user.firstname,
        lastname: res.user.lastname,
        email: res.user.email,
        token: res.token as string,
      });

      history.push(history.location.state ? history.location.state.from : '/');
    } catch (e) {
      console.log(e);
      setError('E-Mail/Telefonnummer oder Passwort falsch.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="login">
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        placeholder="E-Mail oder Telefonnummer"
        onChange={e => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Passwort"
        onChange={e => setPassword(e.target.value)}
      />
      {loading ? (
        <Button>
          <FontAwesomeIcon
            icon={faCircleNotch}
            className="loading-spinner"
            spin
          />
        </Button>
      ) : (
        <Button onClick={login}>Login</Button>
      )}
    </form>
  );
};

function Register() {
  const auth: IAuthContext = useContext(Auth);

  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');
  const [mail, setMail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const register = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (password !== passwordRepeat)
        throw new Error('Passwords do not match.');

      if (firstname === '' || lastname === '' || mail === '' || phone === '')
        throw new Error('Not all fields are filled.');

      let res: any = await fetch('http://localhost:3000/api/v1/auth/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstname,
          lastName: lastname,
          password: password,
          email: mail,
          phoneNumber: phone,
        }),
      });

      res = await res.json();

      if (res.error) throw new Error(res.error);
      if (!res.token) throw new Error('No token provided.');

      // TODO: local or sessionstorage?
      window.localStorage.setItem('coronahelp-token', res.token);

      // TODO: Fetch User information
      auth.set({
        token: res.token,
        firstname: '',
        lastname: '',
        email: '',
        authenticated: true,
      });
    } catch (e) {
      console.log(e);
      setError(
        'Registrierung konnte nicht abgeschlossen werden. Überprüfen sie ihre Eingabe.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="register">
      {error && <div className="error">{error}</div>}
      <div className="aligner">
        <div className="left">
          <div className="avatar" />
        </div>
        <div className="right">
          <input
            type="text"
            placeholder="Vorname"
            onChange={e => setFirstname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nachname"
            onChange={e => setLastname(e.target.value)}
          />
        </div>
      </div>
      <input
        type="text"
        placeholder="E-Mail"
        onChange={e => setMail(e.target.value)}
      />
      <input
        className="spacer"
        type="text"
        placeholder="Telefon"
        onChange={e => setPhone(e.target.value)}
      />
      <input
        type="password"
        placeholder="Passwort"
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Passwort wiederholen"
        onChange={e => setPasswordRepeat(e.target.value)}
      />
      {loading ? (
        <Button>
          <FontAwesomeIcon
            icon={faCircleNotch}
            className="loading-spinner"
            spin
          />
        </Button>
      ) : (
        <Button onClick={register}>Registrieren</Button>
      )}
    </form>
  );
}
