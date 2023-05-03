import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const {loginUser, loginWithGoogle} = useContext(AuthContext);
    const [error, setError] = useState('');

    const loginHandler = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            setError(errorMessage);
          });      
    }

    const handleGithubSignIn = () => {
       
    }

    const handleGoogleSignIn = () => {
        
        loginWithGoogle()
        .then((result) => {
            // // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // // The signed-in user info.
            const user = result.user;
            // // IdP data available using getAdditionalUserInfo(result)
            // // ...
          }).catch((error) => {
            // // Handle Errors here.
            // const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            // // The email of the user's account used.
            // const email = error.customData.email;
            // // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // // ...
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
                Do not have an account? <Link to="/registration">Register</Link>
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