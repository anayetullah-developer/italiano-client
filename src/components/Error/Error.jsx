import React from "react";
import { Card } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorImg from "../../assets/98642-error-404.json";


const Error = () => {
  return (
    <div className="mt-5">
      <Card className="w-25 mx-auto mt-auto">
      <Lottie animationData ={errorImg} loop={true}/>
        <Card.Body>
          <h2 className="text-uppercase text-center">page not found</h2>
          <Link to="/" className="d-flex justify-content-center text-decoration-none"><button className="btn btn-solid-primary">Go back to hompage</button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Error;
