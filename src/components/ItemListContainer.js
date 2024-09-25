import ItemList from './ItemList';
import productosIniciales from '../database/products.js'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

    var initial = 1
    const stockDisponible = 10;

    function getDatos(){

        return new Promise((resolve, reject) => {
            
            setTimeout(function(){

                const algunaLogica = Math.floor(Math.random()*100)
                const error = algunaLogica < 20 ? true : false

                if(error === false) {
                    resolve(productosIniciales)
                }

                reject("Error obteniendo datos")

            }, 2000 )
        })
    }


const ItemListContainer = ({ a, children }) => {

    const [ estado, setEstado ] = useState(initial)
    const [ loading, setLoading ] = useState(true)
    const { idCategoria } = useParams()
    
    //console.log(idCategoria)
    

    const handleSumar = () => {
        if(estado < stockDisponible){
            setEstado(estado+1)  
        }
    }

    const handleRestar = () => {

        if(estado > 0){
            setEstado(estado-1)
        }
    }    

    const onAdd = () => {
        console.log("Agregar al carrito")
    };

    const [ items, setItems ] = useState([]);

    
    useEffect(() => { // Sólo en el primer render 

        getDatos()
            .then(function(respuestaPromise) {

                setItems(respuestaPromise);
                console.log(idCategoria)
                //console.log(respuestaPromise)
            })
            .catch(function(error) {
                //console.log(error);
                
            })
            .finally(function(algo) {
                //console.log("Siempre se ejecuta el Finally")
                setLoading(false)
            });
    
    }, [idCategoria]); 
    


       

    if(loading === true){
    
        return "Cargando..."; 
    
    }else{

        return <ItemList
        estado={ estado }
        handleRestar={ handleRestar }
        handleSumar={ handleSumar }
        onAdd={onAdd}
        stockDisponible={ stockDisponible }
        initial= { initial }
        productosIniciales = { items }
        />

    }
            
       
   
}

export default ItemListContainer;