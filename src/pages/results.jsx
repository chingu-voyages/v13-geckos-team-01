import React from "react";
import { Container } from "react-bootstrap";
import MainNavbar from "../Components/MainNavbar";
import Footer from "../Components/Footer";
import LabelContainer from "../Components/LabelContainer";

function Results() {
  return (
    <Container fluid="true">
      <MainNavbar />
      <LabelContainer />
      <Footer />
    </Container>
  );
}

export default Results;
