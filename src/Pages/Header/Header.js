import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="menu">
             <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand to="/home">Dental Care</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/features">Details</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/contact">Contact Us</NavLink>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;