// import Link from "react";
import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from "react-router-dom"


function NavBarComp(props: any){
    
    var homeLink = '/'

    function LoggedIn(homeLink: String){
          if(props.user.name!==""){
            console.log(homeLink)
            homeLink="/home"
            return(
              <Container>
                <Navbar.Brand as={Link} to={'/home'}>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                  {/* <Nav.Link as={Link} to='/profile'>Profile</Nav.Link> */}
                </Nav>
            </Container>
            )
          } else {
            return(
              <Container>
                <Navbar.Brand as={Link} to={'/'}>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to='/signup'>Connect Now</Nav.Link>
                  <Nav.Link as={Link} to='/login'>Login</Nav.Link>
              </Nav>
            </Container>
            )
          }
        }

    return(
        <Navbar bg="primary" variant="dark">
            {LoggedIn(homeLink)}
        </Navbar>
    )
};

export default NavBarComp;