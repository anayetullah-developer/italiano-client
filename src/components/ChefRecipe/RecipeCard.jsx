import React from "react";
import { Card } from "react-bootstrap";
import { FaHeart, FaStar } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
  const { img, ingredients, method, name } = recipe;
  return (
    <>
      {!recipe ? (
        <div className="d-flex justify-content-center align-items-center my-5">
          <Spinner animation="grow" />{" "}
        </div>
      ) : (
        <></>
      )}
      
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h5>Ingradients</h5>
          <ul>
            {ingredients.map((ing) => (
              <li>{ing}</li>
            ))}
          </ul>
          <h5>Preparation</h5>
          <Card.Text>{method}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between bg-primary">
          <p>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p>
            <FaHeart />
          </p>
        </Card.Footer>
      </Card>
    </>
  );
};

export default RecipeCard;
