import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import productosIniciales from '../database/products.js'

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

            }, 3000 )
        })
    }


const ItemListContainer = ({ a, children }) => {

    const [ estado, setEstado ] = useState(initial)

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
                //console.log(respuestaPromise)
            })
            .catch(function(error) {
                console.log(error);
            })
            .finally(function(algo) {
                console.log("Siempre se ejecuta el Finally");
            });
    
    }, []); 
    

   return (
        <main>
            <h2>Bienvenido {a[0]}!</h2> 
            <br />
            <ItemList
                estado={ estado }
                handleRestar={ handleRestar }
                handleSumar={ handleSumar }
                onAdd={onAdd}
                stockDisponible={ stockDisponible }
                initial= { initial }
                productosIniciales = { items }
            />
        </main>
    );
}

export default ItemListContainer;