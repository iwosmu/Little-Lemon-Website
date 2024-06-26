import React from 'react'
import '../components/main.css'
import Hero from './Hero'
import Specials from './Specials'
import Testimonials from './Testimonials'
import Owners from './Owners'

const Main = () => {
  return (
    <main>
     <Hero/>
    <Specials/>
    <Testimonials/>
    <Owners/>
  </main>
  )
}

export default Main