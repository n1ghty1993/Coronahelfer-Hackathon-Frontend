import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './style.scss';
import Layout from '../Layout';

import Base from '../Routes';

interface IAuth {
  authenticated: Boolean;
  nickname: string;
  token: string;
}

// Create Auth context
// @ts-ignore
export const Auth = React.createContext();

function App() {
  const [auth, setAuth] = useState<IAuth>({
    authenticated: false,
    nickname: '',
    token: '',
  });

  useEffect(() => {
    // Check if jwt is valid
    // if (true) {
    // setAuth({
    //   authenticated: true,
    //   nickname: '',
    //   token: ''
    // })
    // }
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
