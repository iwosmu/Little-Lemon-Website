import React from 'react'
import logo from '../assets/Logo .svg'
import Nav from '../components/Nav'

const Header = () => {
  return (
    <header>
        <h1>My React Blog</h1>
        <img src={logo} alt="logo" />
        <Nav/>
    </header>
  )
}

export default Header