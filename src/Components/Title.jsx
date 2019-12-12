import React from "react";
import { Jumbotron } from "react-bootstrap";

import "./title.css";

import Food from "./../Assets/Images/food.jpg";

//import image with inline styles
const TitleBackground = {
  backgroundImage: `url(${Food})`
};

function Title() {
  return (
    <Jumbotron
      style={TitleBackground}
      className="jumbotron"
      fluid="true"
    ></Jumbotron>
  );
}

export default Title;
