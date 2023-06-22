import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className="app-navbar-container">
            <Navbar.Brand href="#home" className="app-navbar-brand">Enjoy the Outdoors</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/mountains" className="nav-link">Mountains</Link>
                    <Link to="/nationalParks" className="nav-link">National Park</Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
        </>
    );
};

export { Layout }