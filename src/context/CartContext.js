import { Children, createContext, useState } from "react";

export const contexto = createContext()

// Desestructuramos el "Provider" del contexto, componente que permite proveer datos a los hijos.
const { Provider } = contexto

// Definimos el componente "MiProvider", que será el que envuelva a los componentes hijos y les proveerá los valores del contexto.
const MiProvider = ( { children } ) => {

    // Definimos un estado para "carrito", que almacena un array de objetos (productos) con propiedades como id, nombre, precio, y cantidad.
    const [ carrito, setCarrito ] = useState([])
    // Definimos un estado "cantidad", inicialmente en 0, para almacenar la cantidad total de productos en el carrito (puedes actualizarlo más adelante en las funciones).
    const [ cantidad, setCantidad ] = useState(0)
    // Definimos un estado "total", que por ahora está en `false`. Este estado probablemente se usará para almacenar el precio total de los productos en el carrito.
    const [ total, setTotal ] = useState(false)

        
    const addItem = ({ item, cantidadSeleccionada }) => {

        const copiaCarrito = [...carrito];
        const itemsAlCarrito = { ...item, cantidad: cantidadSeleccionada };
        
        const existe = yaExsiteEnCarrito(item.id);
       
        if (existe) {
            
            // Encuentra el índice del item en el carrito
            let index = copiaCarrito.findIndex(prod => prod.id === item.id);
            
            // Actualiza la cantidad del producto existente
            copiaCarrito[index].cantidad += cantidadSeleccionada;

            // Actualiza la cantidad total de productos en el carrito
            setCantidad(prevCantidad => prevCantidad + cantidadSeleccionada);
            
            // Actualiza el carrito
            setCarrito(copiaCarrito);

        } else {
            
            
            // Agregar el producto al carrito
            copiaCarrito.push(itemsAlCarrito);
            setCarrito(copiaCarrito);
            
            // Actualizar la cantidad total en el carrito
            setCantidad(prevCantidad => prevCantidad + cantidadSeleccionada);
        }
    };
    
    
    
    
    const yaExsiteEnCarrito = (id) => {
        return carrito.some(item => item.id === id);
    }

    const borrarProdDelCarrito = (id) => {}

    const limpiarCarrito = (id) => {
        setCarrito([])  // Resetea el carrito a un array vacío.
    }

    // Este objeto contiene los valores y funciones que se van a compartir con los componentes que consuman el contexto.
    const valorDelContexto = {
        carrito: carrito,      // El estado del carrito (productos añadidos).
        addItem: addItem,      // Función para añadir un producto al carrito.
        cantidad: cantidad,    // La cantidad de productos (aún no está actualizada en el código).
        total: 1       // El total (aún no calculado).
    }

    // Retornamos el "Provider" que envuelve a los hijos (Children) del componente.
    // El Provider provee los valores del contexto a los componentes hijos.
    return(

        <Provider value={valorDelContexto}>
            { children }
        </Provider>
    )
}

export default MiProvider
