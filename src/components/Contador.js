import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Contador = ( { initial, stockDisponible, onAdd} ) => {

    let Navigate = useNavigate();

    const handleSumar = () => {
        estado < stockDisponible && setEstado(estado+1);
    }

    const handleRestar = () => {
        estado > 1 && setEstado(estado-1);
    }  
    
    const hanldeAgregar = () => {
        onAdd("variableDelHijo = Vino del contenedor hijo");
        Navigate("../Carrito")
    }

    

    const [ estado, setEstado ] = useState(initial)

    return (
        <div className="botonera">
            <button onClick={ handleRestar } >-</button>
            <p>{ estado }</p>
            <button onClick={ handleSumar } >+</button>
            <button onClick={ hanldeAgregar } >Agregar al carrito</button>
        </div>
    )
}

export default Contador