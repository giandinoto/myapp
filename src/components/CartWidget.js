import React from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from '../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {

  const { cantidad } = useContext( contexto ) 

  return (
    <div>
        <span className='material-icons'>
          <NavLink to="/carrito/">shopping_cart</NavLink>
         </span>
         { cantidad > 0 ? cantidad : "" }
    </div>
  )
}

export default CartWidget