import React from 'react'
import CartWidget from './CartWidget'
import  { NavLink }  from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <CartWidget />
        <nav className='nav'>
         <NavLink to="/categoria/1" className='nav__-link'>Cat 1</NavLink>
         <NavLink to="/categoria/2" className='nav__-link'>Cat 2</NavLink>
         <NavLink to="/categoria/3" className='nav__-link'>Cat 3</NavLink>
      </nav>
    </>
  )
}

export default Nav