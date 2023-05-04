import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorImg from "../../assets/98642-error-404.json";

const Error = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md={3} className="mx-md-auto">
            <Card className="mx-auto mt-auto">
              <Lottie animationData={errorImg} loop={true} />
              <Card.Body>
                <h2 className="text-uppercase text-center">page not found</h2>
                <Link
                  to="/"
                  className="d-flex justify-content-center text-decoration-none"
                >
                  <button className="btn btn-solid-primary">
                    Go back to hompage
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Error;
