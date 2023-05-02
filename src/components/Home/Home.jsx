import React from "react";
import { Card, CardGroup, Carousel, Col, Row } from "react-bootstrap";
import { FaRegThumbsUp } from "react-icons/fa";
import cimage1 from "../../assets/c1.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 " src={cimage1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={cimage1} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={cimage1} alt="Third slide" />

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
                  <p className="mb-1">
                    <small>
                      <span className="fw-bold">Recipies:</span> 2
                    </small>
                  </p>
                  <p className="mb-1">
                    <small>
                      {" "}
                      <span className="fw-bold">Experiences:</span> 4 Years
                    </small>
                  </p>
                  <p className="mb-1">
                    <FaRegThumbsUp className="text-primary" /> 200+
                  </p>
                  <Link to="/recipe">
                    <button className="btn btn-solid-primary">
                      View Recipies
                    </button>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="my-4">
        <h2 className="text-center mb-4">We invites you to events</h2>
        <CardGroup className="border-0">
          <Card className="d-flex justify-content-center align-items-center bg-secondary text-white p-4 border-end">
            <div>
              <h2>February 21</h2>
              <h4>2023</h4>
            </div>
          </Card>
          <Card className="d-flex justify-content-center align-items-center bg-primary p-4 border-end">
            <div>
              <h5 className="text-secondary">Braida Wine Dinner with Chef</h5>
              <h5 className="text-secondary">Scott Anderson of Elements</h5>
            </div>
          </Card>
          <Card className="d-flex justify-content-center align-items-center bg-primary p-4 border-end">
            <div>
              <h5 className="text-secondary">Wednesday</h5>
              <h5 className="text-secondary">12 Pm - 3 Pm</h5>
            </div>
          </Card>
          <Card className="d-flex justify-content-center align-items-center bg-primary p-4 border-end">
            <div>
              <button className="btn btn-link text-dark">Details</button>
            </div>
          </Card>
        </CardGroup>

        <CardGroup className="mt-3">
          <Card className="d-flex justify-content-center align-items-center bg-secondary text-white p-4 border-end">
            <div>
              <h2>February 21</h2>
              <h4>2023</h4>
            </div>
          </Card>
          <Card className="d-flex justify-content-center align-items-center bg-primary p-4 border-end">
            <div>
              <h5 className="text-secondary">Braida Wine Dinner with Chef</h5>
              <h5 className="text-secondary">Scott Anderson of Elements</h5>
            </div>
          </Card>
          <Card className="d-flex justify-content-center align-items-center bg-primary p-4 border-end">
            <div>
              <h5 className="text-secondary">Wednesday</h5>
              <h5 className="text-secondary">12 Pm - 3 Pm</h5>
            </div>
          </Card>
          <Card className="d-flex justify-content-center align-items-center bg-primary p-4 border-end">
            <div>
              <button className="btn btn-link text-dark">Details</button>
            </div>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default Home;
