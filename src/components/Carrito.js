import React, { useContext } from 'react'
import { contexto } from '../context/CartContext'


const Carrito = () => {

  const { carrito, total } = useContext( contexto )

  console.log(carrito)

  return (
    <div>Carrito</div>
  )
}

export default Carrito