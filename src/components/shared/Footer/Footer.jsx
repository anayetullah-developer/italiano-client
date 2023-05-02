import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="border-bottom py-5">
        <div className="w-50 mx-auto text-center">
          <Link className="text-decoration-none">
            <p className="brand-name m-0 text-dark">Italiano Delizioso</p>
            <p className="text-uppercase tagline">Cooking for the soul</p>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab beatae
            nesciunt assumenda, molestias officiis numquam natus consequatur
            dicta a aliquid!
          </p>
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
