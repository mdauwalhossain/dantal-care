import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
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


            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://cdn-caimh.nitrocdn.com/yYKLjJHXYJzwvfGYwbksgHLtEXQTAPwb/assets/static/optimized/wp-content/uploads/2019/05/8f440c4ce0b0eadf3f5dba838c9e10e9.Order-4411-_-Image-7-750x400.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://images.squarespace-cdn.com/content/v1/5a3a8587ccc5c5f14bdd3b7c/1514502889485-3LW3OEYGHE2O766QLDQ0/3+reasons.jpg?format=1500w"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.medoradental.com/wp-content/uploads/2018/08/MedoraDental-650737298.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Header;