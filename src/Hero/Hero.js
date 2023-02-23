import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./cargalore\pexels-abdulwahab-alawadhi-3422964.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>CarGalore</h3>
          <p>Luxury wallpapers you wont find anywhere else</p>
          <Link>
            <Button variant="outline-light" href="/products">
              View Products
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./cargalore\pexels-photo-2896135.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Quality second to none</h3>
          <p>We take pride in our wallpapers and canvas pieces.</p>
          <Link>
            <Button variant="outline-light" href="/products">
              View Products
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./cargalore\pexels-photo-2127733.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Improve your Home aesthetic Today </h3>
          <p>Free delivery</p>
          <Link>
            <Button variant="outline-light" href="/products">
              View Products
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
