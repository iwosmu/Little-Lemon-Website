import React from 'react';
import logo from '../assets/Logo.svg';
import Nav from '../components/Nav';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
