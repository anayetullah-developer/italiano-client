import React from "react";
import {
  Card,
  Carousel,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";
import LazyLoad from "react-lazy-load";
import { FaRegPaperPlane } from "react-icons/fa";

const Home = () => {
  const chefData = useLoaderData();
  return (
    <>
      <div className="container">
        <Carousel fade>
          <Carousel.Item className="carousel-bg">
            <LazyLoad height={400} width={1116} threshold={0.95}>
              <img
                className="d-block w-100 carousel-image"
                src="https://i.ibb.co/j8Lj6VT/eat-g97701e0c3-1920.jpg"
                alt="First slide"
              />
            </LazyLoad>
            <Carousel.Caption>
              <h3>Pepperoni</h3>
              <p>
                Classic pizza with tomato sauce, mozzarella cheese, and slices
                of spicy pepperoni. Perfect for meat lovers.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-bg">
            <LazyLoad height={400} width={1116} threshold={0.95}>
              <img
                className="d-block w-100 carousel-image"
                src="https://i.ibb.co/s3fmjsS/pizza-g6d086f320-1920.jpg"
                alt="Second slide"
              />
            </LazyLoad>

            <Carousel.Caption>
              <h3>Margherita</h3>
              <p>
                Classic pizza with tomato sauce, mozzarella cheese, and fresh
                basil.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-bg">
            <LazyLoad height={400} width={1116} threshold={0.95}>
              <img
                className="d-block w-100 carousel-image"
                src="https://i.ibb.co/rcSQmtD/4k-ge9544a592-1920.jpg"
                alt="Third slide"
              />
            </LazyLoad>

            <Carousel.Caption>
              <h3>Delicious Egg Foods</h3>
              <p>
                Delicious egg foods include omelettes, frittatas, and eggs
                Benedict. They are versatile, easy to make, and packed with
                protein.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Container className="my-5">
          <Row>
            {chefData.map((data) => (
              <ChefCard key={data.id} selectedData={data} />
            ))}
          </Row>
        </Container>

        <div className="my-4">
          <h2 className="text-center mb-5 fst-italic">
            We invite you to events
          </h2>
          <Container className="">
            <Row>
              <Col
                md={3}
                className="d-flex justify-content-center align-items-center bg-secondary text-white p-4 border rounded"
              >
                <div>
                  <h2>May 21</h2>
                  <h4>2023</h4>
                </div>
              </Col>
              <Col
                md={4}
                className="d-flex justify-content-center align-items-center bg-primary p-4 border rounded"
              >
                <div>
                  <h5 className="text-secondary">
                    Braida Wine Dinner with Chef
                  </h5>
                  <h5 className="text-secondary">Scott Anderson of Elements</h5>
                </div>
              </Col>
              <Col
                md={3}
                className="d-flex justify-content-center align-items-center bg-primary p-4 border rounded"
              >
                <div>
                  <h5 className="text-secondary">Wednesday</h5>
                  <h5 className="text-secondary">12 Pm - 3 Pm</h5>
                </div>
              </Col>
              <Col
                md={2}
                className="d-flex justify-content-center align-items-center bg-primary p-4 border rounded"
              >
                <div>
                  <button className="btn btn-link text-dark">Details</button>
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="mt-3">
            <Row>
              <Col
                md={3}
                className="d-flex justify-content-center align-items-center bg-secondary text-white p-4 border rounded"
              >
                <div>
                  <h2>August 5</h2>
                  <h4>2023</h4>
                </div>
              </Col>
              <Col
                md={4}
                className="d-flex justify-content-center align-items-center bg-primary p-4 border rounded"
              >
                <div>
                  <h5 className="text-secondary">Wow, It’s Italian Pasta!</h5>
                  <h5 className="text-secondary">
                    Italian Pasta Cooking Class
                  </h5>
                </div>
              </Col>
              <Col
                md={3}
                className="d-flex justify-content-center align-items-center bg-primary p-4 border rounded"
              >
                <div>
                  <h5 className="text-secondary">Sunday</h5>
                  <h5 className="text-secondary">4 Pm - 7 Pm</h5>
                </div>
              </Col>
              <Col
                md={2}
                className="d-flex justify-content-center align-items-center bg-primary p-4 border rounded"
              >
                <div>
                  <button className="btn btn-link text-dark">Details</button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="border-bottom py-5">
          <h2 className="text-primary newletter-heading text-center">
            Our Newsletter
          </h2>
          <div className="w-50 mx-auto text-center">
            <h2 className="text-center fst-italic">
              Subscribe to our newsletter & keep up with our latest recipes
            </h2>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <InputGroup className="mb-3">
                <Form.Control
                  className="footer-input border-0 border-bottom outline w-75 mx-auto text-center bg-transparent border-color rounded-0"
                  type="email"
                  placeholder="Enter your email"
                />     
                   <FaRegPaperPlane className="text-primary fs-4 position-absolute bottom-50 end-0"/>
                </InputGroup>
              </Form.Group>
            </Form>
            <p className="fst-italic">
              <small>Be informed about the latest recipes & workshops.</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
