import React from 'react'

import { Image, Jumbotron, Container } from 'react-bootstrap'

import Food from './../../Assets/Images/food.jpg'

import './styles.css'


const titleImage = {
    width: "100%",
    height: "30rem",
    backgroundImage: `url(${Food})`
}

function Title() {
    return (
        <Jumbotron fluid className="jumbotron">
        <Container>
            <div style={titleImage}>
                <h1>Title</h1>

            </div>
        </Container>
</Jumbotron>
    )
}

export default Title
