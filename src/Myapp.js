// rafc
import Footer from './Footer'
import Header from './Header'
import Main from './Main'


export const Myapp = () => {

    const nombre = "Horacio"
    const arr = [45,50,3,4,5]
    
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