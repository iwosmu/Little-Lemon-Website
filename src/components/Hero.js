import React from 'react'
import food from '../assets/restauranfood.jpg'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero">
      <div className="text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Experience the best Mediterranean cuisine, crafted with passion and fresh ingredients. Join us for an unforgettable dining experience.</p>
        <button className="btn"><Link to="/reservations" id='link'>Reserve a Table</Link></button>
      </div>
      <img src={food} alt="Delicious food" />
    </section>
  )
}

export default Hero