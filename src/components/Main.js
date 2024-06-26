import React from 'react'
import '../components/main.css'
import food1 from '../assets/restauranfood.jpg'

const Main = () => {
  return (
    <main>
     <section className="hero">
      <div className="text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="btn">Reserve a Table</button>
      </div>
      <img src={food1} alt="Delicious food" />
    </section>

    <section className="specials">
      <h2>Our Specials!</h2>
      <div className="grid">
        {/* Repeat for each special item */}
        <div className="special-item">
          <img src="greek_salad.jpg" alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>$11.99</p>
        </div>
      </div>
    </section>

    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {/* Repeat for each testimonial */}
        <div className="testimonial">
          <p>"Great food!"</p>
          <p>John Doe</p>
        </div>
      </div>
    </section>
  </main>
  )
}

export default Main