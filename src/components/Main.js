import React from 'react'
import ItemListContainer from './ItemListContainer'
import ItemDeailContainer from './ItemDetailContainer'
import Carrito from './Carrito'
import { Route, Routes } from 'react-router'

const Main = ( { nombre }) => {

    const arr = ["Ale",50,3,4,5]

    return (
        <main>
            <h1>Bienvenido { nombre }</h1>
            <Routes>
                <Route path='/carrito/' element={ <Carrito />} />
                <Route path='/' element={ <ItemListContainer />} />
                <Route path='/categoria/:idCategoria' element={ <ItemListContainer a = { arr } nombre = { nombre } /> } />
                <Route path='/producto/:idProducto' element={ <ItemDeailContainer /> } />
            </Routes>
        </main>
    
    )
}

export default Main