import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        
        <div className='container w-50 mx-auto'>
            <Form>
            <Form.Group className="mb-3" controlId="1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" required name='email' placeholder="Enter email" />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="2">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required name='password' placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="3">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" className='mb-2'>
                Login
            </Button> <br/>
            <Form.Text className="text-muted ms-2">
                Do not have an account? <Link to="/registration">Register</Link>
                </Form.Text>
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

export default Login;