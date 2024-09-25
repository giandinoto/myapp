import Footer from './components/Footer'
import Main from './components/Main'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'

export const Myapp = () => {

    const nombre = "Alejandro"

    return (
    
        <BrowserRouter>
            <Header />
            <Main nombre={ nombre }/>
            <Footer />
        </BrowserRouter>
    )
}

export default Myapp