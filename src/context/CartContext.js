import { Children, createContext, useState } from "react";

export const contexto = createContext()

// Desestructuramos el "Provider" del contexto, que es el componente que nos permite proveer datos a los componentes hijos.
const { Provider } = contexto

// Definimos el componente "MiProvider", que será el que envuelva a los componentes hijos y les proveerá los valores del contexto.
const MiProvider = ( { children } ) => {

    // Definimos un estado para "carrito", que almacena un array de objetos (productos) con propiedades como id, nombre, precio, y cantidad.
    const [ carrito, setCarrito ] = useState([
        {
            id: 1,
            nombre: "camisa",
            precio: 40,
            cantidad: 1
        },
        {
            id: 2,
            nombre: "remera",
            precio: 50,
            cantidad: 5
        },
        {
            id: 3,
            nombre: "pantalon",
            precio: 70,
            cantidad: 4
        }
    ])

    // Definimos un estado "cantidad", inicialmente en 0, para almacenar la cantidad total de productos en el carrito (puedes actualizarlo más adelante en las funciones).
    const [ cantidad, setCantidad ] = useState(0)

    // Definimos un estado "total", que por ahora está en `false`. Este estado probablemente se usará para almacenar el precio total de los productos en el carrito.
    const [ total, setTotal ] = useState(false)

    // Función para agregar un producto al carrito. 
    // Aquí se realiza una copia del carrito usando el método slice() para evitar modificar el estado original directamente.
    const addItem = (producto, cantidad) => {
        const copia = carrito.slice(0);
        // Aquí deberías implementar la lógica para agregar el producto al carrito.
    }

    // Función para verificar si un producto ya existe en el carrito. Por ahora está vacía, pero podrías usarla para evitar duplicados.
    const yaExsiteEnCarrito = (id) => {}

    // Función para borrar un producto del carrito. Está vacía, pero podrías usar `setCarrito` para filtrar el carrito y eliminar un producto según su ID.
    const borrarProdDelCarrito = (id) => {}

    // Función para limpiar el carrito. Esto establece el carrito como un array vacío.
    const limpiarCarrito = (id) => {
        setCarrito([])  // Resetea el carrito a un array vacío.
    }

    // Este objeto contiene los valores y funciones que se van a compartir con los componentes que consuman el contexto.
    const valorDelContexto = {
        carrito: carrito,      // El estado del carrito (productos añadidos).
        cantidad: cantidad,    // La cantidad de productos (aún no está actualizada en el código).
        total: 1,          // El total (aún no calculado).
        addItem: addItem       // Función para añadir un producto al carrito.
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
