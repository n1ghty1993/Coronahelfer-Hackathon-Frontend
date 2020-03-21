import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './style.scss';
import Layout from '../Layout';

import Base from '../Routes';

export interface IAuth {
  authenticated: Boolean;
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  token: string | null;
}

export interface IAuthContext {
  auth: IAuth;
  set: Function;
  logout: Function;
}

// Create Auth context
// @ts-ignore
export const Auth = React.createContext<IAuthContext>();

function App() {
  const [auth, setAuth] = useState<IAuth>({
    authenticated: false,
    firstname: null,
    lastname: null,
    email: null,
    token: null,
  });

  useEffect(() => {
    const run = async () => {
      // Check if jwt is valid
      if (window.localStorage.getItem('coronahelp-token')) {
        try {
          // TODO: Fetch user info /users/me
          setAuth({
            authenticated: true,
            firstname: null,
            lastname: null,
            email: null,
            token: window.localStorage.getItem('coronahelp-token') as string,
          });
        } catch (e) {
          console.log(e);
        }
      }
    };

    run();
  }, []);

  const logout = () => {
    setAuth({
      authenticated: false,
      firstname: null,
      lastname: null,
      email: null,
      token: null,
    });
    window.localStorage.removeItem('coronahelp-token');
  };

  return (
    <div className="App">
      <Auth.Provider value={{ auth, set: setAuth, logout: logout }}>
        <BrowserRouter>
          <Layout>
            <Base />
          </Layout>
        </BrowserRouter>
      </Auth.Provider>
    </div>
  );
}

export default App;
