import React from 'react';

import Header from './components/header';
import Map from './components/map';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <section className="content">
        <Map />
      </section>
    </>
  );
};

export default App;
