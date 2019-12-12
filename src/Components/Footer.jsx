import React from "react";

import { Container, Col } from "react-bootstrap";

import "./footer.css";

function Footer() {
  return (
    <Container fluid="true">
      <footer className="row color3">
        <Col className="text-center">
          <p>
            Calc My Food! - &copy; 2019
            <br />
            Chingu Project - v13-geckos-team-01
          </p>
        </Col>
      </footer>
    </Container>
  );
}

export default Footer;
