import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
// import Header from './components/Header';
// import Nav from './components/Nav';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About'; 

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* Define other routes here */}
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;