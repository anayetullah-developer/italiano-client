import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import cimage1 from "../../assets/c1.jpg";
import { FaRegThumbsUp } from "react-icons/fa";
import profilePicture from '../../../assets/anayet.jpg';

const ChefRecipe = () => {
  return (
    <div className="container">
      <Card>
        <Card.Body>
          <Card.Text>
            <Container>
            <Row className="d-flex">
              <Col className="">
                <h2>Hello there! I am Maggy. Start cooking with me.</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tenetur necessitatibus odio nobis consequatur itaque maxime
                  reprehenderit magnam quod reiciendis qui.
                </p>
              </Col>
              <Col>
                <div className="ms-auto">
                <Image src={profilePicture} className="profile-picture mx-md-3" roundedCircle />
                <h4>Anayet Ullah</h4>
                <p className="mb-1">
                  <small>
                    <span className="fw-bold">Recipies:</span> 2
                  </small>
                </p>
                <p className="mb-1">
                  <small>
                    {" "}
                    <span className="fw-bold">Experiences:</span> 4 Years
                  </small>
                </p>
                <p className="mb-1">
                  <FaRegThumbsUp className="text-primary" /> 200+
                </p>
                <button className="btn btn-solid-primary">View Recipies</button>
                </div>
              </Col>
            </Row>
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChefRecipe;
