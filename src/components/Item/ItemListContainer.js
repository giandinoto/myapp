import ItemList from './ItemList';
import Spinner from '../Spinner/Spinner';
//import productosIniciales from '../database/products.js'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';


    
const ItemListContainer = ({ a, children }) => {

    const [ loading, setLoading ] = useState(true)
    const { idCategoria } = useParams()
    const [ items, setItems ] = useState([]);

    
    useEffect(() => { // Sólo en el primer render 

        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(productosIniciales=>setItems(productosIniciales)
        )
        
        .catch(function(error) {
            console.log(error);
        })
        .finally(function(algo) {
            //console.log("Siempre se ejecuta el Finally")
            setLoading(false)
        }) 

    }, [idCategoria]) 

    return (

        loading === true ? <Spinner /> : <ItemList productosIniciales={items} />
    
    );    
                
}

export default ItemListContainer;