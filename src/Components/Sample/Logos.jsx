import React from "react";

import { Row, Image, Container } from "react-bootstrap";

import "../styles.css";

import Logo from "./../../Assets/Logo/logo.png";

function Logos() {
  return (
    <div className="color1">
      <Container>
        <h1 className="text-center">Proposed Logo</h1>

        <Row className="justify-content-center">
          <Image src={Logo} width={371} height={380} />
        </Row>
      </Container>
    </div>
  );
}

export default Logos;
