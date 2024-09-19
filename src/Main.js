import React from 'react';
import { useState } from 'react';

const Main = ({ a, children }) => {

    const [ estado, setEstado ] = useState(0);

    const handleSumar = () => {
        setEstado(estado+1)
        
    }
    
    const handleRestar = () => {
        if(estado > 0 ){
            setEstado(estado-1)
        }
    }

    return (
        <main>
        <h2>Bienvenido {a[0]}!</h2> {/* Muestra el primer valor del array 'a' */}
            <p>Tu edad es {a[1]}<br/></p>
            <div>{children}</div>
            <p>Mi contador va {estado}</p>
            <button onClick={ handleSumar } >Sumar</button>
            <button onClick={ handleRestar } >Restar</button>
        
        </main>
    );
}

export default Main;
