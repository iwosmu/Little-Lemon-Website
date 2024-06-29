import React from 'react'
import greeksalad from '../assets/greek_salad.jpg'
import bruschetta from '../assets/bruchetta.png'
import lemondessert from '../assets/lemon_dessert.jpg'

const Specials = () => {
  return (
    <section className="specials" id='menu'>
    <h2>Our Specials!</h2>
    <button className='btn'>Online Menu</button>
    <div className="grid">
      <div className="special-item">
        <img src={greeksalad} alt="Greek Salad" />
        <div className = "firstrow">
          <h3>Greek Salad</h3>
          <p className="price">$11.99</p>
        </div>
        <p>Fresh and crisp, our Greek Salad is a perfect blend of tomatoes, cucumbers, olives, and feta cheese, dressed with our signature vinaigrette.</p>
        <p>Order a delivery 🏍</p>
      </div>
      <div className="special-item">
        <img src={bruschetta} alt="Greek Salad" />
        <div className = "firstrow">
          <h3>Bruschetta</h3>
          <p className="price">$5.99</p>
        </div>
        <p>Crispy toasted bread topped with a savory mix of tomatoes, basil, garlic, and olive oil, perfect for a light appetizer.</p>
        <p>Order a delivery 🏍</p>
      </div>
      <div className="special-item">
        <img src={lemondessert} alt="Greek Salad" />
        <div className = "firstrow">
          <h3>Lemon Dessert</h3>
        <p className="price">$4.99</p>
        </div>
        <p>Indulge in our zesty Lemon Dessert, a sweet and tangy treat that’s sure to satisfy your cravings.</p>
        <p>Order a delivery 🏍</p>
      </div>
    </div>
  </section>
  )
}

export default Specials