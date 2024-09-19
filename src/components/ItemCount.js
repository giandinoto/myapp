import React, { useState } from 'react'

const ItemCount = ( { stock, initial, onAdd }) => {

    const [ estado, setEstado ] = useState(initial)
    const stockDisponible = stock;

    const handleSumar = () => {
        if(estado < stockDisponible){
            setEstado(estado+1)   
            onAdd(estado);
        }
        
    }

    const handleRestar = () => {

        if(estado > 0){
            setEstado(estado-1)
            onAdd(estado);
        }
    }

    const addToCart = () => {
        onAdd(estado);
    };

    return (
        <div>
            <h4>Nombre del producto</h4>
            <div id="botonera">
                <button onClick={ handleRestar } >Restar</button>
                <p>{estado}</p>
                <button onClick={ handleSumar } >Sumar</button>
                <button onClick={ addToCart } >Agregar al carrito</button>
            </div>
        </div>
  )
}

export default ItemCount