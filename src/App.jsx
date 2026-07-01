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
import Attendance from './pages/Attendance';
import Leave from './pages/Leave';
import Recruitment from './pages/Recruitment';
import Payroll from './pages/Payroll';
import Loans from './pages/Loans';
import FoodDashboard from './pages/FoodDashboard';
import Reimbursement from './pages/Reimbursement';
import Settings from './pages/Settings';

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
                <Route path='/about' element={<About onOpenModal={handleShow} />} />
                <Route path='/contact-us' element={<Contact onOpenModal={handleShow} />} />
                {/* services Pages */}
                <Route path='/attendance' element={<Attendance onOpenModal={handleShow} />} />
                <Route path='/leave' element={<Leave onOpenModal={handleShow} />} />
                <Route path='/recruitment' element={<Recruitment onOpenModal={handleShow} />} />
                <Route path='/payroll' element={<Payroll onOpenModal={handleShow} />} />
                <Route path='/loans' element={<Loans onOpenModal={handleShow} />} />
                <Route path='/food-dashboard' element={<FoodDashboard onOpenModal={handleShow} />} />
                <Route path='/reimbursement' element={<Reimbursement onOpenModal={handleShow} />} />
                <Route path='/settings' element={<Settings onOpenModal={handleShow} />} />

                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/thank-you' element={<ThankYou />} />

                {/* Not Found Page */}
                <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />


            {/* 3. The Shared Application Modal */}
            <Modal className='Mymodal modal-lg' show={showModal} onHide={handleClose} centered>
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
