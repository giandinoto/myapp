import React from 'react'
import CartWidget from './CartWidget'

const Nav = () => {
  return (
    <>
      <CartWidget />
      <nav className='nav'>
        <a href="#" className='nav__-link'>Cat 1</a>
        <a href="#" className='nav__link'>Cat 2</a>
        <a href="#" className='nav__link'>Cat 3</a>
      </nav>
    </>
  )
}

export default Nav