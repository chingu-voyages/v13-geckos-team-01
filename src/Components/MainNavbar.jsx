import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import "./styles.css";

import Logo from "./../Assets/Logo/logo.png";

function MainNavbar({ history }) {
  return (
    <Navbar expand="lg" className="color3">
      <Navbar.Brand href="#home">
        <Image src={Logo} width="100" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            className="letterColorNavbar"
            onClick={() => history.push("/")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className="letterColorNavbar"
            onClick={() => history.push("/search")}
          >
            Search
          </Nav.Link>
          <Nav.Link
            className="letterColorNavbar"
            onClick={() => history.push("/results")}
          >
            Results
          </Nav.Link>
          <Nav.Link
            className="letterColorNavbar"
            onClick={() => history.push("/sample")}
          >
            Style-Guide
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(MainNavbar);
