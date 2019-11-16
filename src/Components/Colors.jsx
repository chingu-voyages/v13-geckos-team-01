import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import './styles.css'
function Colors() {
    return (

        <Container>
           <h1 className="text-center">Proposed color pallete</h1> 
            <Row>
                <Col className="color1"><h2 className="text-center">#F2F3ED</h2></Col>
                <Col className="color2"><h2 className="text-center">#7C9897</h2></Col>
            </Row>
            <Row>
                <Col className="color3"><h2 className="text-center">#3FC1C9</h2></Col>
                <Col className="color4"><h2 className="text-center">#846E5A</h2></Col>
                <Col className="color5"><h2 className="text-center">#4C8067</h2></Col>
            </Row>
        </Container>
    )
}

export default Colors
