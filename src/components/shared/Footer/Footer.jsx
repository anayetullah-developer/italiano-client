import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
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
              <Form.Control
                className="footer-input border-0 border-bottom outline w-75 mx-auto text-center bg-transparent border-secondary rounded-0"
                type="email"
                placeholder="Enter your email"
              />
            </Form.Group>
          </Form>
          <p className="fst-italic">
            <small>Be informed about the latest recipes & workshops.</small>
          </p>
        </div>
      </div>

      <Container className="mt-5 bg-primary p-5 border-bottom">
        <Row className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-start align-items-center">
          <Col>
          <h4 className="mb-2">Address</h4>
          <div className="border w-25 border-secondary mb-3"></div>
          <p className="mb-1">8500, Lorem Street, Chicago,</p>
          <p className="mb-1">IL, 55030</p>
          </Col>
          <Col>
            <h4 className="mb-2 mt-md-0 mt-3">Phone</h4>
            <div className="border w-25 border-secondary mb-3"></div>
            <p className="mb-1">Online Reservations</p>
            <p className="mb-1">0 800 555 44 11</p>
            <p className="mb-1">0 800 555 44 11</p>
          </Col>
          <Col>
          <h4 className="mb-2 mt-md-0 mt-3">Working Hour</h4>
            <div className="border w-25 border-secondary mb-3"></div>
            <p className="mb-1">Lunch 11:30am – 2:30pm</p>
            <p className="mb-1">Dinner 5:30am – 10pm</p>
            <p className="mb-1">Sun. Brunch 10:30am – 2:30pm</p>
            <p className="mb-1">Sun. Dinner 5:30pm – 10pm</p>
            <p className="mb-1">Happy Hour</p>
            <p className="mb-1">Mon-Fri 5pm – 7pm</p>
          </Col>
          <Col>
            <h4 className="mb-2 mt-md-0 mt-3">Email</h4>
              <div className="border w-25 border-secondary mb-3"></div>
              <p className="mb-1">anaetullah7755@gmail.com</p>
              <p className="mb-1">anaetullah7755@gmail.com</p> className="mb-1"
          </Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-between align-items-center container py-2 bg-primary">
        <p>
          <small>Privacy Policy</small>
        </p>
        <p>
          <small>&copy; All rights reserved</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
