import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './style.scss';
import Layout from '../Layout';

import Base from '../Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout authenticated={false}>
          <Base />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
