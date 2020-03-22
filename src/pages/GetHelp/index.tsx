import React, { useContext, useEffect, useState } from 'react';
import { Auth, IAuthContext } from '../../components/App';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './style.scss';
import Button from '../../components/Button';
import { callApi } from '../../api/requests';

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

  // Load categories
  useEffect(() => {
    const run = async () => {
      try {
        let categories: any = await fetch(`${SERVER_URL}/api/v1/category`);
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
  const send = async () => {
    try {
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

      let res = await callApi('/request', auth.auth.token as string, {
        title,
        description,
        category,
        'address.plz': zip,
        'address.city': city,
        'address.street': streetNumber,
        'address.street_nr': streetNumber,
        time_end: enddate,
      });

      if (res.error) throw new Error('Error while creating request.');

      // TODO: What todo if created
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(forElse);
  }, [forElse]);

  return (
    <form className="gethelpForm">
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
      <Button onClick={send}>abschicken</Button>
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
