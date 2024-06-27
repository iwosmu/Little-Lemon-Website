// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main'; // Import the Main component

function App() {
  const availableTimes = ["12:00", "13:30", "18:00", "20:00"];
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Main availableTimes={availableTimes} />
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;