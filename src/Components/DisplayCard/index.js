import React from "react";
import { BiDish } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import "./index.css";

const DisplayCard = ({ image, recipe, comment, title, direction, align }) => {
  return (
    <div
      className={`card__display card__${direction}`}
      style={{ alignSelf: `${align}` }}
    >
      <div className="image__container">
        <img src={image} alt={title} />
        {recipe ? (
          <div className="image__overlay overlay__black flex__center">
            {recipe.servings} <BiDish color="#fff" fontSize={14} />
          </div>
        ) : (
          <div className="image__overlay overlay__beige flex__center">
            <BsInstagram color="#e0d8d2" fontSize={14} />
          </div>
        )}
      </div>
      <div
        className={
          recipe ? "content__container__start" : "content__container__start"
        }
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {recipe ? (
            <span>Dairy Free: {recipe.dairyFree ? "Yes" : "No"}</span>
          ) : (
            ""
          )}
          {recipe ? (
            <span>Gluten Free: {recipe.glutenFree ? "Yes" : "No"}</span>
          ) : (
            ""
          )}
        </div>
        <h4>{title}</h4>
        {recipe ? (
          <button className="custom__button">
            <a target="blank" href={recipe.spoonacularSourceUrl}>
              See More
            </a>
          </button>
        ) : (
          <span>{comment}</span>
        )}
      </div>
    </div>
  );
};

export default DisplayCard;
