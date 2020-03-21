import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './style.scss';
import Layout from '../Layout';

import Base from '../Routes';

export interface IAuth {
  authenticated: Boolean;
  firstname: string;
  lastname: string;
  email: string;
  token: string;
}

export interface IAuthContext {
  auth: IAuth;
  set: Function;
}

// Create Auth context
// @ts-ignore
export const Auth = React.createContext<IAuthContext>();

function App() {
  const [auth, setAuth] = useState<IAuth>({
    authenticated: false,
    firstname: '',
    lastname: '',
    email: '',
    token: '',
  });

  useEffect(() => {
    const run = async () => {
      // Check if jwt is valid
      if (window.localStorage.getItem('coronahelp-token')) {
        try {
          // TODO: Fetch user info /users/me
          setAuth({
            authenticated: true,
            firstname: '',
            lastname: '',
            email: '',
            token: window.localStorage.getItem('coronahelp-token') as string,
          });
        } catch (e) {
          console.log(e);
        }
      }
    };

    run();
  }, []);

  return (
    <div className="App">
      <Auth.Provider value={{ auth, set: setAuth }}>
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
