import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import cimage1 from "../../assets/c1.jpg";
import { FaRegThumbsUp } from "react-icons/fa";
import profilePicture from "../../assets/anayet.jpg";

const ChefRecipe = () => {
  return (
    <div className="container mt-5">
      <Card className="bg-primary p-4 border-0">
        <Card.Body className="border border-color">
          <Card.Text>
            <Container>
              <Row className="d-flex flex-column flex-md-row justify-content-md-between align-items-center py-5">
                <Col className="text-center">
                  <h2 className="fst-italic">Hello there! I am Maggy. Start cooking with me.</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Tenetur necessitatibus odio nobis consequatur itaque maxime
                    reprehenderit magnam quod reiciendis qui.
                  </p>
                </Col>
                <Col>
                  <div className="ms-auto d-flex flex-column flex-md-row justify-content-md-around align-items-center mt-md-0 mt-4">
                    <Image
                      src={profilePicture}
                      className="w-50 mx-md-3 ms-me-md-0 me-3 mb-md-0 mb-3"
                      roundedCircle
                    />
                    <div>
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
                      <button className="btn btn-solid-primary">
                        View Recipies
                      </button>
                    </div>
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
