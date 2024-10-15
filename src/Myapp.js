import Footer from './components/Footer'
import Main from './components/Main'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import MiProvider from './context/CartContext'

export const Myapp = () => {

    const nombre = "Alejandro"

    return (
    
        <BrowserRouter>
            <MiProvider>
                <Header />
                <Main nombre={ nombre }/>
            </MiProvider>
            <Footer />
        </BrowserRouter>
    )
}

export default Myapp