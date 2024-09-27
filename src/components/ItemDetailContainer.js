import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Asegúrate de usar 'react-router-dom'

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
        console.log(producto);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [idProducto]); // Agrega `idProducto` como dependencia para el `useEffect`

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>Precio: {item.price}</p>
    </div>
  );
};

export default ItemDetailContainer;
