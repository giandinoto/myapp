import React from 'react';

import ItemCount from './components/ItemCount';

const Main = ({ a, children }) => {

    const onAdd = (quantity) => {
        console.log(`Se añadieron ${quantity} productos al carrito`);
        // Aquí puedes hacer lo que necesites con la cantidad
      };

    return (
        <main>
            <h2>Bienvenido {a[0]}!</h2> 
            <br />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        
        </main>
    );
}

export default Main;
