import React from "react";
import {Navbar, Nav } from 'react-bootstrap';


const Header = (props) => {
   return(
    <>
    

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About us</Nav.Link>
      <Nav.Link href="/contact">contact_us</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
      
    
  </>
   )
  };

  export default Header;