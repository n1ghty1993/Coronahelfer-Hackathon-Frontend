import React from 'react';
import './style.scss';
import Layout from '../Layout';

import Base from '../../routes/base';

function App() {
  return (
    <div className="App">
      <Layout authenticated={false}>
        <Base />
      </Layout>
    </div>
  );
}

export default App;
