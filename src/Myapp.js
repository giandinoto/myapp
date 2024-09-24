// rafc
import Footer from './components/Footer'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'

export const Myapp = () => {

    const nombre = "Alejandro"
    const arr = ["Ale",50,3,4,5]
    
    return (
    
        <>
            <Header nombre = { nombre } />

            <ItemListContainer  a = { arr } />

            <Footer />
        </>
    
    )
}

export default Myapp