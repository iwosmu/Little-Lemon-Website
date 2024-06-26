import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import React from 'react';

function App() {
  return (
    <React.Fragment className="App">
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
