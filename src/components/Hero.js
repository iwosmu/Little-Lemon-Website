import React from 'react'
import food from '../assets/restauranfood.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="btn">Reserve a Table</button>
      </div>
      <img src={food} alt="Delicious food" />
    </section>
  )
}

export default Hero