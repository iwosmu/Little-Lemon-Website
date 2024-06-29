import React from 'react'
import owners1 from '../assets/Mario and Adrian A.jpg'
import owners2 from '../assets/Mario and Adrian b.jpg'

const Owners = () => {
  return (
    <section className="owners" id="about">
      <div className="text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Discover the taste of authentic Mediterranean dishes at Little Lemon. Our menu features fresh, locally sourced ingredients prepared with care. From savory appetizers to delectable desserts, there's something for everyone to enjoy. Join us for a meal that combines tradition with innovation.</p>
      </div>
      <img src={owners1} alt="owners" id="i1"/>
      <img src={owners2} alt="owners" id="i2"/>
    </section>
  )
}

export default Owners