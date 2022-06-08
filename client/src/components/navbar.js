import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap'

function NavBar(){
<Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
                <Nav.Link as={Link} to='/jobs'>Jobs</Nav.Link>
                <Nav.Link as={Link} to='/login'>Login</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
};

export default NavBar;