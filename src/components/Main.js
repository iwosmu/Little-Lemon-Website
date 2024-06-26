import React from 'react'
import '../components/main.css'
import food1 from '../assets/restauranfood.jpg'
import greeksalad from '../assets/greek_salad.jpg'
import bruschetta from '../assets/bruchetta.png'
import lemondessert from '../assets/lemon_dessert.jpg'
import owners1 from  '../assets/Mario and Adrian A.jpg'
import owners2 from '../assets/Mario and Adrian b.jpg'

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
      <button className='btn'>Online Menu</button>
      <div className="grid">
        <div className="special-item">
          <img src={greeksalad} alt="Greek Salad" />
          <div className = "firstrow">
            <h3>Greek Salad</h3>
            <p className="price">$11.99</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Order a delivery 🏍</p>
        </div>
        <div className="special-item">
          <img src={bruschetta} alt="Greek Salad" />
          <div className = "firstrow">
            <h3>Bruschetta</h3>
            <p className="price">$5.99</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Order a delivery 🏍</p>
        </div>
        <div className="special-item">
          <img src={lemondessert} alt="Greek Salad" />
          <div className = "firstrow">
            <h3>Lemon Dessert</h3>
          <p className="price">$4.99</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Order a delivery 🏍</p>
        </div>
      </div>
    </section>

    <section className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials-grid">
        {/* Repeat for each testimonial */}
        <div className="testimonial">
          <h3>James</h3>
          <div className="line">
            <img src="https://via.placeholder.com/75" alt="Customer" />
            <p>★ ★ ★ ★ ★</p>
          </div>
          <p>Nothing can quite match the deliciousness of this</p>
        </div>
        <div className="testimonial">
          <h3>Elizabeth</h3>
          <div className="line">
            <img src="https://via.placeholder.com/75" alt="Customer" />
            <p>★ ★ ★ ★ ★</p>
          </div>
          <p>The Little Lemon Restaurant always has me coming back for more!</p>
        </div>
        <div className="testimonial">
          <h3>Andrew</h3>
          <div className="line">
            <img src="https://via.placeholder.com/75" alt="Customer" />
            <p>★ ★ ★ ★ ★</p>
          </div>
          <p>A great place for a date, meeting a friend or celebrating an occasion!</p>
        </div>
        <div className="testimonial">
          <h3>Katie</h3>
          <div className="line">
            <img src="https://via.placeholder.com/75" alt="Customer" />
            <p>★ ★ ★ ★ ★</p>
          </div>
          <p>I've enjoyed this place for a long time and it just keeps getting better!</p>
        </div>
      </div>
    </section>
    <section className="owners">
      <div className="text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <img src={owners1} alt="owners" id="i1"/>
      <img src={owners2} alt="owners" id="i2"/>
    </section>
  </main>
  )
}

export default Main