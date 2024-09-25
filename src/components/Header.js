import React from 'react'
import Nav from './Nav'
import { Link, NavLink } from 'react-router-dom'

const Header = ( ) => {
  return (
    <header id='layout-header' className='header'>
          <Link to="/"><h3 className='header___title'>Logo  </h3></Link>
          <Nav />
    </header>
  )
}

export default Header