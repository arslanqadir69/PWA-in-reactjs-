import React from 'react'
import {Navbar,Container, Nav} from 'react-bootstrap';
import { Link} from "react-router-dom";
import '../App.css'
function NavBar() {
    return (
        <div>
              <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link >
        <Link to='/'>Home</Link>
      </Nav.Link>
      <Nav.Link >  <Link to='/About'>About</Link></Nav.Link>
      <Nav.Link >  <Link to='/Contact'>Contact</Link>
      </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
        </div>
    )
}

export default NavBar
