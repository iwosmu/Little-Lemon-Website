import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';
import '../styles/nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><HLink to="/#about">About</HLink></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;