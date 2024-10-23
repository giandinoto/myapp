import { Link } from "react-router-dom"

const Item = ( { id,  nombre,  imagen}) => {

    return (
        <div className="cardProduct">
            <img src= {imagen}  alt={ nombre } />
            <Link to={"../producto/" + id}> <h4>{ nombre }</h4></Link>
        </div>
    )
}

export default Item