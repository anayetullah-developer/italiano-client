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
            Subscribe to our newsletter & keep up with our latest recipes and
            organized workshops.
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

      <Container className="my-5">
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-between align-items-center container py-2">
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
