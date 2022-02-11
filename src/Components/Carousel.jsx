import React from "react";
import musicInstrument from "../img/musicInstrument.jpg";
import fishing from "../img/fishing.jpg";
import programming from "../img/programming.jpg";
import camping from "../img/camping.jpg";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/carousel.css";

function ControlledCarousel() {
  return (
    <Carousel className="carousel-component">
      <Carousel.Item>
        <img className="d-block w-100" src={programming} alt="Fisrt slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={musicInstrument}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={fishing} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={camping} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
