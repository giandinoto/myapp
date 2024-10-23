import React, { useContext } from 'react'
import { contexto } from '../context/CartContext'
import { Link } from 'react-router-dom'


const Carrito = () => {

  const { carrito, total } = useContext( contexto )


  //console.log(carrito)

  return (
    <div>
      <h2>Carrito</h2>
      {

      carrito.length >= 1 ?
        carrito.map( carrito => (

          <article key={carrito.id}>
            <br /><br />
            <p><b>{carrito.title}</b></p>
            <p>{carrito.cantidad} x {carrito.price}</p>
            <p>Total Parcial: ${carrito.cantidad * carrito.price}  </p>
            <button>Borrar</button>
            <br /><br />
          </article>

        ))

        : (
          <>
          <p>No hay productos en el carrito</p>
          
          </>
        )

      }
      <br />
      <Link to="../"><u>Seguir navegando</u></Link>
    </div>
  )
}

export default Carrito