import React from 'react'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonials-grid">
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
  )
}

export default Testimonials