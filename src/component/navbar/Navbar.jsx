import React from "react";
import { NavLink } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNav() {
  return (

    

        <Navbar id="Navbar" expand="lg" className="bg-dark p-4 ">
          <Container>
            <Link to="" className="text-light fs-3 fw-bold text-decoration-none">START FRAMEWORK</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link to="about" className="text-light fw-bold text-decoration-none mx-3">ABOUT</Link>
                <Link  to="portfolio" className="text-light fw-bold text-decoration-none mx-3">PORTFOLIO</Link>
                <Link  to="contacts" className="text-light fw-bold text-decoration-none mx-3">CONTACTS</Link>
             
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    
    
  
  ;
}

export default MyNav;
