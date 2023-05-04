import React from "react";
import { Card, CardGroup, Col, Container, Image, Row } from "react-bootstrap";
import cimage1 from "../../assets/c1.jpg";
import { FaHeart, FaRegThumbsUp } from "react-icons/fa";
import profilePicture from "../../assets/anayet.jpg";
import rImg1 from "../../assets/r1.jpg";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "./RecipeCard";



const ChefRecipe = () => {
  const singleChefData = useLoaderData();
  const {id, chefImg, chefBio, chefName, experience, likes, numberOfRecipies, recipies } = singleChefData;

  return (
    <>
      <div className="container my-5">
        <Card className="bg-primary p-4 border-0">
          <Card.Body className="border border-color">
            <div>
              <Container>
                <Row className="d-flex flex-column flex-md-row justify-content-md-between align-items-center py-5">
                  <Col className="text-center">
                    <h2 className="fst-italic">
                      Hello there! I am {chefName} Start cooking with me.
                    </h2>
                    <p>
                      {chefBio}
                    </p>
                  </Col>
                  <Col>
                    <div className="ms-auto d-flex flex-column flex-md-row justify-content-md-around align-items-center mt-md-0 mt-4">
                      <Image
                        src={chefImg}
                        className="w-50 mx-md-3 ms-me-md-0 me-3 mb-md-0 mb-3"
                        roundedCircle
                      />
                      <div>
                        <h4>{chefName}</h4>
                        <p className="mb-1">
                          <small>
                            <span className="fw-bold">Recipies:</span> {numberOfRecipies}
                          </small>
                        </p>
                        <p className="mb-1">
                          <small>
                            <span className="fw-bold">Experiences:</span> {experience}
                          </small>
                        </p>
                        <p className="mb-1">
                          <FaRegThumbsUp className="text-primary" /> {likes}
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="container mb-5">
        <CardGroup>
          {
            recipies.map((recipe, idx) => <RecipeCard key={idx} recipe ={recipe}/>)
          }
            
        </CardGroup>
      </div>
    </>
  );
};

export default ChefRecipe;
