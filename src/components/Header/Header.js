import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navbar className="nav-bar" bg="light" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand className="nav-brand" href="#home">Sajib Hossan</Navbar.Brand>
                    <Navbar.Toggle className='menu-bar' aria-controls="basic-navbar-nav"><i className="fa-solid fa-bars-staggered"></i></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav">
                            <Nav.Link className="nav-link" as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link className="nav-link" as={HashLink} to="/home#about">About</Nav.Link>
                            <Nav.Link className="nav-link" as={HashLink} to="/home#skills">Skills</Nav.Link>
                            <Nav.Link className="nav-link" as={HashLink} to="/home#projects">Projects</Nav.Link>
                            <Nav.Link className="nav-link" as={HashLink} to="/home#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;