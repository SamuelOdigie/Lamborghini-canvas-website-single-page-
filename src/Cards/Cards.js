import React from "react";
import Card from "react-bootstrap/Card";

const Sales = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our top Picks!</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="./cargalore/61jjEl2n68S._AC_SL1500_.jpg"
            />
            <Card.Body>
              <Card.Title>Everest Green lamborghini</Card.Title>
              <Card.Text>
                This sporty performante canvas in Green is eyecandy for lambo
                enthusiast only £39.99.
              </Card.Text>
              <a href="/Products" className="btn btn-secondary">
                Buy now
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="./cargalore/71mHfUBRE5L._AC_SX425_.jpg"
            />
            <Card.Body>
              <Card.Title>lamborghini Huracan</Card.Title>
              <Card.Text>
                This stunning yellow lamborghini is our poster boy.This canvas
                transfoms interiors in a flash for only £29.99
              </Card.Text>
              <a href="/Products" className="btn btn-secondary">
                Buy now
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-4">
          <Card>
            <Card.Img variant="top" src="./cargalore\SSY114.webp" />
            <Card.Body>
              <Card.Title>Drip or Drown</Card.Title>
              <Card.Text>
                aestheticly pleasing a mixture of both with our famous drip
                effect.Cant go wrong for just £35.99
              </Card.Text>
              <a href="/Products" className="btn btn-secondary">
                Buy now
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sales;
