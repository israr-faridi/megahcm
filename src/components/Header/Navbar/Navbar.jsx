import React from 'react';
import Logo from '../../../assets/images/logo.webp'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Btn from '../../Common/Btn';

const MegaNavbar = ({onOpenModal}) => {
  return (
    <Navbar expand="lg" className="py-3 ">
      <Container>
        {/* Logo Section */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={Logo}// Replace with actual logo path
            height="40"
            className="d-inline-block align-top"
            alt="MegaHCM Logo"
          />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links and CTA */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/solutions">Solutions</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="#partners">Partners</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="/contact-us">Contact</Nav.Link>
            <Nav.Link href="/sign-in">Sign In</Nav.Link>
          </Nav>

          <Btn text={"Get a free Demo"} name={"primary"} onClick={onOpenModal}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MegaNavbar;