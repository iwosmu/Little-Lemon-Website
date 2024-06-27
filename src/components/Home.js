import React from 'react'
import '../components/home.css'
import Hero from './Hero'
import Specials from './Specials'
import Testimonials from './Testimonials'
import Owners from './Owners'

const Home = () => {
  return (
    <>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <Owners/>
    </>
  )
}

export default Home