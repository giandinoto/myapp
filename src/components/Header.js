import React from 'react'
import Nav from '../Nav'

const Header = ( { nombre } ) => {
  return (
    <header id='layout-header' className='header'>
          <h1 className='header___title'>Bienvenido { nombre } </h1>
          <span className='material-icons'>
            shopping_cart
          </span>
          <Nav />
    </header>
  )
}

export default Header