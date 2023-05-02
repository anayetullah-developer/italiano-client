import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import profilePicture from '../../../assets/anayet.jpg';
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="light" className="navbar-bg" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <p className="brand-name m-0">Italiano Delizioso</p>
            <p className="text-uppercase tagline">Cooking for the soul</p>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-md-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            <NavLink to="/" className={({ isActive }) => isActive ? 'navlink me-md-4 mb-md-0 mb-2 text-primary' : 'navlink me-md-4 mb-md-0 mb-2 text-dark'}>Home</NavLink> 
            <NavLink to="/blog" className={({ isActive }) => isActive ? 'navlink me-md-4 mb-md-0 mb-2 text-primary' : 'navlink me-md-4 mb-md-0 mb-2 text-dark'}>Blog</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'navlink me-md-4 mb-md-0 mb-2 text-primary' : 'navlink me-md-4 mb-md-0 mb-2 text-dark'}>About</NavLink>
            </Nav>
            <Image src={profilePicture} className="profile-picture mx-md-3" roundedCircle />
              <Button className="btn btn-outline-primary d-block d-md-inline-block mt-3 mt-md-0">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default NavigationBar;
