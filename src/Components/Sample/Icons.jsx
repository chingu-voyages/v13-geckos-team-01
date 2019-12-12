import React from "react";

import { Row, Col, Image, Container } from "react-bootstrap";

function Icons() {
  return (
    <Container>
      <h1 className="text-center">Proposed Icons</h1>
      <br />
      <br />
      <Row>
        <Col>
          <Image
            src={"https://image.flaticon.com/icons/svg/2224/2224286.svg"}
            width={171}
            height={180}
          />
        </Col>
        <Col>
          <Image
            src={"https://image.flaticon.com/icons/svg/2224/2224112.svg"}
            width={171}
            height={180}
          />
        </Col>
        <Col>
          <Image
            src={"https://image.flaticon.com/icons/svg/149/149169.svg"}
            width={171}
            height={180}
          />
        </Col>
        <Col>
          <Image
            src={"https://image.flaticon.com/icons/svg/149/149852.svg"}
            width={171}
            height={180}
          />
        </Col>
      </Row>
      <br />
      <br />
      <p className="text-center">
        More like this can be found at sites like: https://www.flaticon.com
      </p>
    </Container>
  );
}

export default Icons;
