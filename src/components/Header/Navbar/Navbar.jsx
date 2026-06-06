import React from 'react';
import Logo from '../../../assets/images/logo.webp';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'; // 1. Added Offcanvas import
import Btn from '../../Common/Btn';

const MegaNavbar = ({ onOpenModal }) => {
  return (
    <Navbar expand="lg" className="py-3">
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
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

        {/* 2. Swapped Navbar.Collapse out for Navbar.Offcanvas */}
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end" // Slides out from the right side. Change to "start" for left side.
        >
          {/* Offcanvas Header (Only visible on mobile/tablet screen sizes) */}
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              <img src={Logo} height="35" alt="MegaHCM Logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>

          {/* Offcanvas Body / Menu Items Container */}
          <Offcanvas.Body className="align-items-center">
            {/* Added 'ms-auto' to push the menu links over to the right before the CTA button */}
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

            {/* The global modal button controller */}
            <div className="mt-3 mt-lg-0">
              <Btn text={"Get a free Demo"} name={"primary"} onClick={onOpenModal} />
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MegaNavbar;