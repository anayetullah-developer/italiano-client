import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <Container fluid className="mt-5 bg-primary p-5 border-bottom">
        <Row className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-start align-items-center">
          <Col>
          <h4 className="mb-2">Address</h4>
          <p className="mb-1">8500, Lorem Street, Chicago,</p>
          <p className="mb-1">IL, 55030</p>
          </Col>
          <Col>
            <h4 className="mb-2 mt-md-0 mt-3">Phone</h4>
            <p className="mb-1">Online Reservations</p>
            <p className="mb-1">0 800 555 44 11</p>
            <p className="mb-1">0 800 555 44 11</p>
          </Col>
          <Col>
          <h4 className="mb-2 mt-md-0 mt-3">Working Hour</h4>
            <p className="mb-1">Lunch 11:30am – 2:30pm</p>
            <p className="mb-1">Dinner 5:30am – 10pm</p>
            <p className="mb-1">Sun. Brunch 10:30am – 2:30pm</p>
            <p className="mb-1">Sun. Dinner 5:30pm – 10pm</p>
            <p className="mb-1">Happy Hour</p>
            <p className="mb-1">Mon-Fri 5pm – 7pm</p>
          </Col>
          <Col>
            <h4 className="mb-2 mt-md-0 mt-3">Email</h4>
              <p className="mb-1">anaetullah7755@gmail.com</p>
              <p className="mb-1">anaetullah7755@gmail.com</p>
          </Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-between align-items-center py-2 bg-primary container-fluid">
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
