import React from "react";

import { Container } from "react-bootstrap";

//import Components
import MainNavbar from "../Components/MainNavbar";
import Title from "../Components/Title";
import Brand from "../Components/Brand";
import Logos from "../Components/Sample/Logos";
import Colors from "../Components/Sample/Colors";
import Typography from "../Components/Sample/Typography";
import Icons from "../Components/Sample/Icons";
import MainForm from "../Components/Sample/Form";
import Footer from "../Components/Footer";

function ComponentIndex() {
  return (
    <Container fluid="true">
      <MainNavbar />
      <Title />
      <Brand />
      <Logos />
      <Colors />
      <Typography />
      <Icons />
      <MainForm />
      <Footer />
    </Container>
  );
}

export default ComponentIndex;
