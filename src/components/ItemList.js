import React from 'react'
import Item from './Item'

const ItemList = ({ handleRestar, handleSumar, estado, onAdd, initial, productosIniciales }) => {
    return (
        <div className="item-list">
           
            {
            
                productosIniciales.map((producto, index) => (
                    <Item 
                        estado={estado}
                        handleRestar={handleRestar} // Agregar
                        handleSumar={handleSumar} // Agregar
                        onAdd={onAdd} // Agregar
                        key={index}
                        id={producto.id}
                        nombre={producto.title}
                        precio={producto.price}
                        imagen={producto.image}
                    />
                ))
            
            }
        </div>

    );
};

export default ItemList