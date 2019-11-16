import React from 'react'

import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap'

import './styles.css'


function Footer() {
    return (
        <div>
            <Navbar expand="lg" className="color3">
                <br/><br/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Footer;
