import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user, logOut} =useFirebase();
    // const {user, logOut} = useAuth();
  
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
                   
                  
                  { 
                  user?
                  <button onClick={logOut}>Log out</button>
                  :
                  <NavLink to="/login" style={{ textDecoration: 'none', color:"white",  }}>Login</NavLink>}

                   <span style={{color:'goldenrod', padding: '5px'}}>{user.displayName}</span>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;