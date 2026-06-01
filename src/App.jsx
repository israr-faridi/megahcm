import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Footer from './components/Footer/Footer';
import MegaNavbar from './components/Header/Navbar/Navbar';

const App = () => {

    return (
        <>
            <header>
                <MegaNavbar />
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact-us' element={<Contact />} />
                <Route path='/sign-in' element={<SignIn />} />
            </Routes>

            <Footer />

        </>
    )
}

export default App
