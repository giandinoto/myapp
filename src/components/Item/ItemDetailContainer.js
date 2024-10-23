import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';  
import Contador from '../Contador'
import { contexto } from '../../context/CartContext';

let initial = 1
const stockDisponible = 5;
const ItemDetailContainer = () => {
  
  const [item, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams(); // Corrección: Invoca `useParams` como función.
  const { addItem } = useContext(contexto);
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
    const onAdd = (cantidadSeleccionada) => {
      console.log("cantidad seleccionada: ", cantidadSeleccionada); 
      const itemsAlCarrito = { item, cantidadSeleccionada };
      addItem(itemsAlCarrito);
  };
    return (
      <article className='itemDetalContainerCard'>
        <h2 className='item-detail-title'>Detalles del Producto</h2>
        <img className='product-image' src={item.image} alt={item.title} />
        <h1 className='product-title'>{item.title}</h1>
        <p className='item-detail-description'>{item.description}</p>
        <h2 className='item-detail-price'>Precio: $ {item.price}</h2>
        <Contador onAdd={onAdd} initial={initial} stockDisponible={stockDisponible} />
    </article>

    );
};
export default ItemDetailContainer;