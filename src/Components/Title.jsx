import React from 'react'

import { Image, Jumbotron, Container } from 'react-bootstrap'

import Food from './../Assets/Images/food.jpg'

import './styles.css'

function Title() {
    return (
        <Jumbotron fluid className="jumbotron">
            <Container>
                <Image src={Food}
                className="justify-content-center"
                width="100%"
                height="auto" />
                <h1 className="text-center">Style Guide 1.0</h1>
                <p className="text-center"> 
                This is the first proposal for the styleguide to be used in this project.
                </p>
            </Container>
        </Jumbotron>
    )
}

export default Title
