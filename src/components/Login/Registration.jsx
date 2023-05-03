import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="mx-auto w-50">
      <Form>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            required
            name="name"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="1">
          <Form.Label>Photo url</Form.Label>
          <Form.Control
            type="text"
            required
            name="photo"
            placeholder="Enter photo url"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="password"
            placeholder="Enter Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="4">
          <Form.Check
            type="checkbox"
            name="accept"
            label="Accept terms and condition"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-2">
          Register
        </Button>
        <br />
        <Form.Text className="text-muted ms-2">
          Already have an account? <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Group className="mb-3" controlId="5"></Form.Group>
        {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> 
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
      </Form>
    </div>
  );
};

export default Registration;
