import React from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import { FaRegThumbsUp } from 'react-icons/fa';
import cimage1 from '../../assets/c1.jpg';

const Home = () => {
  return (
    <div className="container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={cimage1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cimage1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cimage1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Row xs={1} md={3} className="g-4 py-5">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={cimage1} />
            <Card.Body>
              <Card.Title>Anayet Ullah</Card.Title>
              <Card.Text>
                <p className="mb-1"><small><span className="fw-bold">Recipies:</span> 2</small></p>
                <p className="mb-1"><small> <span className="fw-bold">Experiences:</span> 4 Years</small></p>
                <p className="mb-1"><FaRegThumbsUp className="text-primary"/> 200+</p>
                <button className="btn btn-solid-primary">View Recipies</button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default Home;
