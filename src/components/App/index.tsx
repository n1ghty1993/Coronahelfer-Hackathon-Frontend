import React from 'react';
import './style.scss';
import Layout from '../Layout';

function App() {
  return (
    <div className="App">
      <Layout authenticated={false}></Layout>
    </div>
  );
}

export default App;
