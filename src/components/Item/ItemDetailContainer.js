import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Asegúrate de usar 'react-router-dom'
import Contador from '../Contador';

let initial = 1
const stockDisponible = 5;

const ItemDetailContainer = () => {
  
  const [item, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams(); // Corrección: Invoca `useParams` como función

  useEffect(() => {
      // Realiza la solicitud cuando cambie `idProducto`
      fetch(`https://fakestoreapi.com/products/${idProducto}`)
        .then((res) => res.json())
        .then((producto) => {
          setItems(producto);
          setLoading(false); // Cambia `loading` a false cuando termine la carga
          //console.log(producto);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, [idProducto]); // Agrega `idProducto` como dependencia para el `useEffect`

    if (loading) {
      return <div>Cargando...</div>;
    }


    const onAdd = (variableDelHijo) => {
      console.log(variableDelHijo)
    };

    return (
      <article className='itemDetalContainerCard'>
        <h2>Detalles del Producto</h2>
        <img src={item.image} alt={item.title} />
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <h2>Precio: $ {item.price}</h2>

        <Contador onAdd={ onAdd } initial={ initial} stockDisponible= {stockDisponible}/>
            
      </article>
    );
};

export default ItemDetailContainer;
