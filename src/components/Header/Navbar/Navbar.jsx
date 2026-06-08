import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/images/logo.webp';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'; 
import Btn from '../../Common/Btn';

const MegaNavbar = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scrolled down more than 20 pixels, change state to true
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar 
      expand="xxl" 
      className={`py-3 custom-navbar-fixed ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`} 
      fixed="top"
    >
      <Container>
        {/* Logo Section */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={Logo}
            height="40"
            className="d-inline-block align-top"
            alt="MegaHCM Logo"
          />
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xxl" />

        {/* Navbar Offcanvas */}
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-xxl"
          aria-labelledby="offcanvasNavbarLabel-expand-xxl"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-xxl">
              <img src={Logo} height="35" alt="MegaHCM Logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="align-items-center">
            <Nav className="ms-auto pe-3">
              <Nav.Link href="/product">Product</Nav.Link>
              <Nav.Link href="/solutions">Solutions</Nav.Link>
              <Nav.Link href="/resources">Resources</Nav.Link>
              <Nav.Link href="/about">About us</Nav.Link>
              <Nav.Link href="#partners">Partners</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="/contact-us">Contact</Nav.Link>
              <Nav.Link href="/sign-in">Sign In</Nav.Link>
            </Nav>

            <div className="mt-3 mt-xxl-0">
              <Btn text={"Get a free Demo"} name={"primary"} onClick={onOpenModal} />
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MegaNavbar;