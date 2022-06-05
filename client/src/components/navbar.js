import React from "react";
import Nav from "react-bootstrap/Nav"

function NavBar(){
    return(
        <Nav activeKey="/">
            <Nav.Item>
                <Nav.Link href="/home">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/about">Postings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>Sign Up</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar