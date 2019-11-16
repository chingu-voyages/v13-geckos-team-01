import React from 'react'

import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap'
import { withRouter } from "react-router-dom";


import './styles.css'


function MainNavbar({history}) {
    return (
        <div>
        <Navbar expand="lg" className="color3">
            <Navbar.Brand href="#home">LogoHere</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto">
                    <Nav.Link className="letterColorNavbar" onClick={() => history.push("/")}>Home</Nav.Link>
                    <Nav.Link className="letterColorNavbar" onClick={() => history.push("/sample")}>Sample Web Site</Nav.Link>
                    <NavDropdown className="letterColorNavbar" title="Dropdown">
                    <NavDropdown.Item href="#action/3.1">Brand Essence</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Proposed Logo</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Proposed Color palette</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Proposed Fonts</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Proposed Icons</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Proposed Forms and buttons</NavDropdown.Item>
                </NavDropdown>
                </Nav>
             
            </Navbar.Collapse>
</Navbar>
</div>
    )
}

export default withRouter (MainNavbar);
