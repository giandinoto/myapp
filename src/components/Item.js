const Item = ( { stock, initial, onAdd, handleSumar, handleRestar, estado, nombre,  imagen, cantidad }) => {

    return (
        <div className="cardProduct">
            <h4>{ nombre } . { cantidad }</h4>
            <img src= {imagen}  alt={ nombre } />
            
            <div id="botonera">
                <button onClick={ handleRestar } >Restar</button>
                <p>{estado}</p>
                <button onClick={ handleSumar } >Sumar</button>
                <button onClick={ onAdd } >Agregar al carrito</button>
            </div>
        </div>
  )
}

export default Item