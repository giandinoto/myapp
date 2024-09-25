const Item = ( { stock, initial, onAdd, handleSumar, handleRestar, estado, nombre,  imagen, cantidad }) => {

    return (
        <div className="cardProduct">
            <img src= {imagen}  alt={ nombre } />
            <h4>{ nombre } . { cantidad }</h4>
            <div className="botonera">
                <button onClick={ handleRestar } >-</button>
                <p>{estado}</p>
                <button onClick={ handleSumar } >+</button>
                <button onClick={ onAdd } >Agregar al carrito</button>
            </div>
        </div>
  )
}

export default Item