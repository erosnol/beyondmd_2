import React, { Component } from 'react';
import Jokes from './api/components/Jokes';
import Header from  './components/Header'
import Resume from './components/Resume';


function App() {
  return (
    <div className="App">
      <Header />
      <Resume />
      <Jokes />
    </div>
  );
}

export default App;