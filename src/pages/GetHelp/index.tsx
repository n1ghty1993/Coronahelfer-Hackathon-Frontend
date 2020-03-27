import React, { useContext, useEffect, useState } from 'react';
import { Auth, IAuthContext } from '../../components/App';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';
import Button from '../../components/Button';
import { callApi } from '../../api/requests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const GetHelp = () => {
  const auth: IAuthContext = useContext(Auth);
  return (
    <div className="gethelp">
      <div className="container">
        {auth.auth.authenticated ? <Formular /> : <NotAuthenticated />}
      </div>
    </div>
  );
};

const Formular = () => {
  const history = useHistory();
  const auth: IAuthContext = useContext(Auth);
  const [categories, setCategories] = useState<any[]>([]);
  const [category, setCategory] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [enddate, setEnddate] = useState(new Date());
  const [streetNumber, setStreetNumber] = useState<string | null>('');
  const [forElse, setForElse] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Load categories
  useEffect(() => {
    const run = async () => {
      try {
        let categories: any = await fetch(`http://backend:3000/api/v1/category`);
        categories = await categories.json();

        if (categories.error || !categories.result)
          throw new Error('Error while fetching categories');

        setCategories(categories.result);
        setCategory(categories.result[0]._id);
      } catch (e) {
        console.log(e);
      }
    };

    run();
  }, []);

  // create request
  const send = async (e: any) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (
        title === '' ||
        description === '' ||
        zip === '' ||
        city === '' ||
        street === '' ||
        streetNumber === ''
      )
        throw new Error('Some fields are empty.');

      if (!auth || !auth.auth.authenticated) {
        throw new Error('You need to be logged in.');
      }

      let res = await callApi(
        '/request',
        auth.auth.token as string,
        {
          title,
          description,
          category,
          'address.plz': zip,
          'address.city': city,
          'address.street': street,
          'address.street_nr': streetNumber,
          time_end: enddate,
        },
        'POST',
      );

      if (res.error) throw new Error('Error while creating request.');

      setLoading(false);
      history.push('/profile/search');
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError('Anzeige konnte nicht angelegt werden. Eingaben überprüfen.');
    }
  };

  return (
    <form className="gethelpForm">
      {error && <div className="error">{error}</div>}
      <h2>HILFE BEKOMMEN</h2>
      <h3>Wobei brauchen Sie Hilfe?</h3>
      <div className="withLabel">
        <label>Kategorie</label>
        <select onChange={(e: any) => setCategory(e.target.value)}>
          {categories.map((cat, key) => (
            <option value={cat._id} key={key}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <h3>Details</h3>
      <input
        type="text"
        placeholder="Titel"
        value={title}
        className="spacer"
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder={'Beschreibung'}
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <div className="withLabel">
        <label>Bis</label>
        <DatePicker
          selected={enddate}
          onChange={(v: any) => setEnddate(v)}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <h3>Adresse</h3>
      <input
        type="text"
        placeholder="Straße"
        value={street}
        className="spacer"
        onChange={e => setStreet(e.target.value)}
      />
      <input
        type="number"
        placeholder="Nummer"
        value={streetNumber as string}
        onChange={e => setStreetNumber(e.target.value)}
      />
      <input
        type="text"
        placeholder="Stadt"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input
        type="number"
        placeholder="Postleitzahl"
        value={zip}
        onChange={e => setZip(e.target.value)}
      />
      <h3>Hilfe für eine andere Person?</h3>
      <Switch set={setForElse} value={forElse} />
      {loading ? (
        <Button>
          <FontAwesomeIcon
            icon={faCircleNotch}
            className="loading-spinner"
            spin
          />
        </Button>
      ) : (
        <Button onClick={send}>abschicken</Button>
      )}
    </form>
  );
};

interface ISwitch {
  set: Function;
  value: Boolean;
}

const Switch: React.FC<ISwitch> = ({ set, value }) => {
  return (
    <div className="switch">
      <span onClick={() => set(true)} className={value ? 'selected' : ''}>
        Ja
      </span>
      <span onClick={() => set(false)} className={!value ? 'selected' : ''}>
        Nein
      </span>
    </div>
  );
};

const NotAuthenticated = () => {
  return (
    <div className="notAuthed">
      <h2>HILFE BEKOMMEN</h2>
      <p>Um einen Eintrag anzulegen, musst du dich anmelden.</p>
      <Link to="/login">Zum Login</Link>
    </div>
  );
};

export default GetHelp;
