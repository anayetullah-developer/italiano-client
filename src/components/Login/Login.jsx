import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const {loginUser, loginWithGoogle, loginWithGithub, loading} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const loginHandler = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate(from, {replace: true})
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });      
    }

    const handleGithubSignIn = () => {
        if(loading) {
            return  <div className="d-flex justify-content-center align-items-center mt-5 text-primary"><Spinner className="" animation="border" /></div>
        }
        loginWithGithub()
        .then((result) => {
            const user = result.user;
            if(result) {
                navigate(from, {replace: true})
            }
          
          }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
           
          });
    }

    const handleGoogleSignIn = () => {
        
        loginWithGoogle()
        .then((result) => {
            const user = result.user;
            navigate(from, {replace: true})
          
          }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
           
          });
    }

    return (
        <div className='container w-50 mx-auto'>
            <Form onSubmit={loginHandler}>
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
            <Button variant="primary" type="submit" className='mb-2 btn btn-solid-primary text-white'>
                Login
            </Button> <br/>
            <Form.Text className="text-muted ms-2">
                Do not have an account? <Link to="/login/registration">Register</Link>
            </Form.Text>
            <Form.Text className="text-danger d-block">
               {error}
            </Form.Text>
            {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> 
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form>
            <div>
            <Button variant="primary" type="submit" className='mb-2 btn btn-primary text-white' onClick={handleGoogleSignIn}>
               <FaGoogle/> Login with google
            </Button> <br/>
            <Button variant="primary" type="submit" className='mb-2 btn btn-dark text-white' onClick={handleGithubSignIn}>
            <FaGithub/> Login with github
            </Button> <br/>
            </div>
      </div>

    );
};

export default Login;