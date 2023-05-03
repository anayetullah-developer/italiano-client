import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Emailerror, setEmailError] = useState('');
  const [PasswordError, setPasswordError] = useState('');
  const [Emailsuccess, setEmailSuccess] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');

  const {registerUser} = useContext(AuthContext);

  const emailHandler = (e) => {
    const emailInput = e.target.value;

    setEmail(emailInput);

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regex.test(email)) {
      setEmailError('Invlaid Email');
    }else {
      setEmailError('')
    }
  }

  const passwordHandler = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    if(!regex.test(password)) {
      setPasswordError('Password should contain at least one lowercase, one uppercase, one number and one special character (@$!%*?&)')
    }else {
      setPasswordError('')
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;

    if(Emailerror) {
      form.email.focus();
      return;
    }else if(PasswordError) {
      form.password.focus();
      return;
    }
    
    registerUser(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });

  } 


  return (
    <div className="mx-auto w-50">
      <Form onSubmit={submitHandler}>
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
            className={Emailerror ? 'border-danger' : ''}
            required
            value={email}
            onInput={emailHandler}
            onBlur={emailHandler}
            name="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-warning">
            {Emailerror}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="3">
          <Form.Label>Password</Form.Label>
            <Form.Control
            className={PasswordError ? 'border-danger' : ''}
            type="password"
            required
            value={password}
            onInput={passwordHandler}
            onBlur={passwordHandler}
            name="password"
            placeholder="Enter Password"
          />
          <Form.Text className="text-warning">
            {PasswordError}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="4">
          <Form.Check
            type="checkbox"
            name="accept"
            label="Accept terms and condition"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-2 btn btn-solid-primary text-white">
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
