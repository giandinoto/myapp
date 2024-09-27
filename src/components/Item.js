import { Link } from "react-router-dom"

const Item = ( { stock, initial, onAdd, handleSumar, handleRestar, estado, id,  nombre,  imagen}) => {

    return (
        <div className="cardProduct">
            <img src= {imagen}  alt={ nombre } />
            <Link to={"../producto/" + id}> <h4>{ nombre }</h4></Link>
            <div className="botonera">
                <button onClick={ handleRestar } >-</button>
                <p>{ estado }</p>
                <button onClick={ handleSumar } >+</button>
                <button onClick={ onAdd } >Agregar al carrito</button>
            </div>
        </div>
  )
}

export default Item