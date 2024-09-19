// rafc
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './Main'


export const Myapp = () => {

    const nombre = "Alejandro"
    const arr = ["Ale",50,3,4,5]
    
    return (

        
        <>
            <Header nombre = { nombre } />
            
            <Main a = { arr } >
                <h3>Estos es un h3 </h3>
                <p>Lorem ipsum </p>
            </Main>
            
            <Footer />
        </>
    
    )
}

export default Myapp