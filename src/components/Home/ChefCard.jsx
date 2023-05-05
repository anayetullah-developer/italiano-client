import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaRegThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ selectedData }) => {
  const {id, chefImg, chefName, experience, likes, numberOfRecipies } = selectedData;
  const Placeholder = () => (
    <div style={{ height: '250px', backgroundColor: '#ccc' }}>Loading...</div>
  );
  return (
        <Col md={4} className="mb-md-4">
          <Card>
            <LazyLoad height={250} offset={100}><Card.Img style={{height: '250px'}} variant="top" src={chefImg} /></LazyLoad>
            <Card.Body>
              <Card.Title>{chefName}</Card.Title>
              <div>
                <p className="mb-1">
                  <small>
                    <span className="fw-bold">Recipies:</span> {numberOfRecipies}
                  </small>
                </p>
                <p className="mb-1">
                  <small>
                    {" "}
                    <span className="fw-bold">Experiences:</span> {experience}
                  </small>
                </p>
                <p className="mb-1">
                  <FaRegThumbsUp className="text-primary" /> {likes}
                </p>
                <Link to={`/recipe/${id}`}>
                  <button className="btn btn-solid-primary">
                    View Recipies
                  </button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
  );
};

export default ChefCard;
