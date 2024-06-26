import React from 'react'
import logo from '../assets/verticallogo1.png' 
import '../components/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src={logo} alt="Little Lemon" className="footer-logo" />
      </div>
      <div className="footer-column">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li>Contact us</li>
          <li>Adrian</li>
          <li>littlelemon@gmail.com</li>
          <li>+48 523 521 592</li>
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li>Our social media</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>TikTok</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer