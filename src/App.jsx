import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import Footer from './components/Footer/Footer';
import MegaNavbar from './components/Header/Navbar/Navbar';
import Form from './components/Form/Form';
import ThankYou from './pages/ThankYou';
import ScrollToTop from './components/Common/ScrollToTop';
import NotFound from './pages/NotFound';
import Services from './pages/Services';

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    return (
        <>
            <ScrollToTop />
            <header>
                <MegaNavbar onOpenModal={handleShow} />
            </header>
            <Routes>
                <Route path='/' element={<Home onOpenModal={handleShow} />} />
                <Route path='/about' element={<About onOpenModal={handleShow}/>} />
                <Route path='/services' element={<Services onOpenModal={handleShow}/>} />
                <Route path='/contact-us' element={<Contact onOpenModal={handleShow}/>} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/thank-you' element={<ThankYou />} />

                {/* Not Found Page */}
                <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />


            {/* 3. The Shared Application Modal */}
            <Modal className='Mymodal' show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Get A Quote</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onCloseModal={handleClose} />
                </Modal.Body>

            </Modal>

        </>
    )
}

export default App
