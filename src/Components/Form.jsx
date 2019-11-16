import React from 'react'

import { Form, Row, Col, Image, Container, Button } from 'react-bootstrap'

function MainForm() {
    return (
        <div className="color1">
        <Container>
        <h1 className="text-center">Proposed Forms and buttons</h1>
        <br/><br/>
        <Row>
        <Col>

        <Form>
             <Form.Group as={Row} controlId="formPlaintextPassword">
                 <Col sm="10">
                <Form.Control type="text" placeholder="Search" />
                </Col>
            </Form.Group>
            </Form>
        </Col>

        <Col>
        <Form>
        {['checkbox', 'radio'].map(type => (
            <div key={`default-${type}`} className="mb-3">
            <Form.Check 
                type={type}
                id={`default-${type}`}
                label={`default ${type}`}
            />
            </div>
        ))}
        </Form>
        </Col>

        <Col>
        <Button variant="primary" type="submit">
            Submit
        </Button>

        </Col>
        </Row>
        <br/><br/>
        <p className="text-center">This forms are part of the react-bootstrap library</p>

    </Container>
    </div>
    )
}

export default MainForm
