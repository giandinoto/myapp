import React from 'react'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
  return (
    <div>
        <span className='material-icons'>
          <NavLink to="/carrito/">shopping_cart</NavLink>
            
        </span>
    </div>
  )
}

export default CartWidget