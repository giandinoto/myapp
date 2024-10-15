import React from 'react'
import Item from './Item' 

const ItemList = ({  estado,  productosIniciales }) => {
    return (
        <div className="item-list">
            {
            
                productosIniciales.map((producto, index) => (
                    <article key={index}>
                        <Item 
                            estado={estado}
                            id={producto.id}
                            nombre={producto.title}
                            precio={producto.price}
                            imagen={producto.image}
                        
                        />
                    </article>
                ))
            
            }
        </div>

    );
};

export default ItemList