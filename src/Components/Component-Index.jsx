import React from 'react';

import { Container } from 'react-bootstrap'


//import components
import MainNavbar from './MainNavbar'
import Title from './Title'
import Brand from './Brand'
import Logos from './Logos'
import Colors from './Colors'
import Typography from './Typography'
import Icons from './Icons'
import MainForm from './Form'
import Footer from './Footer'

function ComponentIndex() {
  return (
      <Container fluid="true">
          <MainNavbar/>
          <Title/>
          <br/>
          <Brand/>
          <br/>
          <Logos/>
          <br/>
          <Colors/>
          <br/>
          <Typography/>
          <br/>
          <Icons/>
          <br/>
          <MainForm/>
          <br/>
          <Footer/>
      </Container>
  );
}

export default ComponentIndex;
