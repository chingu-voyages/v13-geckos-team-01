import React from "react";

import { Card, Container } from "react-bootstrap";

import "../styles.css";

function Typography() {
  return (
    <div className="color1">
      <Card className="color1">
        <Container>
          <Card.Body className="mainFont">
            <h1 className="text-center">
              <strong> Main Title in [h1] size </strong>
            </h1>
            <br />
            <h2 className="text-center">Secondary Titles in [h2] size</h2>
            <br />
            <h3 className="text-center">Tertiary Titles in [h3] size.</h3>
            <br />
            <br />
            <p className="text-center">
              <strong>Font style: Times New Roman</strong>
            </p>
            <br />
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula, nisl id laoreet maximus, neque mi fermentum diam, nec
              vulputate ligula mauris vitae magna. Sed non consectetur nisi.
              Aliquam eleifend elit massa, venenatis vestibulum ex mollis ac.
              Fusce a dictum diam. Phasellus at efficitur erat. Curabitur
              pulvinar, quam eu luctus iaculis, nisl nisl porta enim, finibus
              porttitor arcu diam quis magna. Sed dictum lacus est, sed vehicula
              tortor rhoncus ut. Morbi quis neque ac elit feugiat consequat id
              ac ex. Morbi vitae augue nec lacus hendrerit venenatis vitae vitae
              erat. Proin condimentum, augue sed rutrum viverra, nunc tellus
              molestie massa, et condimentum nibh eros at dolor.
            </p>
          </Card.Body>
        </Container>
      </Card>
    </div>
  );
}

export default Typography;
