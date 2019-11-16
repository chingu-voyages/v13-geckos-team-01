import React from 'react'

import { Card, Container } from 'react-bootstrap'

import './styles.css'

function Brand() {
    return (
        <Card>
            <Container>
            <Card.Body className="mainFont">
                <strong>Brand Essence:</strong>
                <br/>
                <p className="text-justify">
                Our website main focus will be nutrition and health. 
                Our MVP will use an API to get a list of foods and some data 
                about their nutritional value. There are already some websites 
                that do this like for example: <a href="https://caloriecontrol.org/healthy-weight-tool-kit/food-calorie-calculator/?" > 
                here </a>, <a href="https://www.webmd.com/diet/healthtool-food-calorie-counter" > here </a> 
                and <a href="https://www.nhs.uk/live-well/healthy-weight/calorie-checker/" > here </a>, 
                but perhaps we could add more information in order to make ourselves 
                different from ‘competitors’.
                
                As mentioned before, the site main focus will be nutrition, therefore 
                the website will have a theme related to such subject as it will be illustrated 
                in the following sections.</p>
            </Card.Body>
            </Container>
        </Card>
    )
}

export default Brand
