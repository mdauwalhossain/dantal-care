import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="menu-bar">
             <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand className="bg-success px-2" to="/home">Dental Care</Navbar.Brand>
                <Nav className="links me-auto , mx-3">
                    <NavLink to="/home" style={{ textDecoration: 'none', color:"white"}}>Home</NavLink>
                    <NavLink to="/details" style={{ textDecoration: 'none', color:"white" }}>Details</NavLink>
                    <NavLink to="/about" style={{ textDecoration: 'none', color:"white" }}>About Us</NavLink>
                    <NavLink to="/contact" style={{ textDecoration: 'none', color:"white",  }}>Contact Us</NavLink>
                    <NavLink to="/login" style={{ textDecoration: 'none', color:"white",  }}>Login</NavLink>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;