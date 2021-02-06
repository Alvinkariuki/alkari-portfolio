import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Logo from "../../assets/icons/Aicon.png";
import "./style.css";


const MyNavbar = () => {
 return (
  <>
   <Navbar fixed="top" expand="md"className="animate-navbar nav-theme justify-content-between"  variant="dark">
  <Navbar.Brand href="#home">
   <img className="logo" src={Logo} alt="Portfolio logo" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#features">Skills</Nav.Link>
      <Nav.Link href="#features">Experience</Nav.Link>
      <Nav.Link href="#features">Contact</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
  </>
 )
};

export default MyNavbar;
