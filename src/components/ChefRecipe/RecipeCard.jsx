import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const RecipeCard = ({ recipe }) => {
  const [disableBtn, setDisableBtn] = useState(false);
  const { img, ingredients, method, name, rating } = recipe;

  const MySwal = withReactContent(Swal);
  const addFavoriteHandler = () => {
    MySwal.fire({
      title: <p>Recipe Added</p>,
      icon: "success",
      imageUrl: img,
      imageWidth: 400,
      imageHeight: 200,
    });

    setDisableBtn(true);
  };

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
        <Card.Img className="card-img" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="card-title">{name}</Card.Title>
          <h5>Ingradients</h5>
          <ul>
            {ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
          <h5>Preparation</h5>
          <Card.Text className="card-text">{method}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between bg-primary">
          <p>
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar />}
              readonly
              placeholderSymbol={<FaStar className="text-primary" />}
              fullSymbol={<FaStar />}
            />
          </p>
          <p>
            <button
              onClick={addFavoriteHandler}
              className={
                disableBtn 
                  ? "btn btn-secondary cursor-default"
                  : "btn btn-solid-primary"
              }
            >
              Add to favorite <FaHeart />
            </button>
          </p>
        </Card.Footer>
      </Card>
    </>
  );
};

export default RecipeCard;
