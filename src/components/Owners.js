import React from 'react'
import owners1 from '../assets/Mario and Adrian A.jpg'
import owners2 from '../assets/Mario and Adrian b.jpg'

const Owners = () => {
  return (
    <section className="owners">
      <div className="text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <img src={owners1} alt="owners" id="i1"/>
      <img src={owners2} alt="owners" id="i2"/>
    </section>
  )
}

export default Owners