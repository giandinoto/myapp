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
                        nombre={producto.nombre}
                        cantidad={producto.cantidad}
                        precio={producto.precio}
                        imagen={producto.imagen}
                    />
                ))
            
            }
        </div>

    );
};

export default ItemList