import React from "react";
import { BiDish } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import "./index.css";

const DisplayCard = ({ image, recipe, comment, title, direction }) => {
  const { servings, dairyFree, glutenFree, analyzedInstructions } = recipe;

  return (
    <div className={`card__display card__${direction}`}>
      <div className="image__container">
        <img src={image} alt={title} />
        {recipe ? (
          <div className="image__overlay overlay__black flex__center">
            {servings} <BiDish color="#fff" fontSize={14} />
          </div>
        ) : (
          <div className="image__overlay overlay__beige flex__center">
            <BsInstagram color="#771e21" fontSize={14} />
          </div>
        )}
      </div>
      <div className="content__container">
        {recipe ? <span>Dairy Free: {dairyFree ? "Yes" : "No"}</span> : ""}
        {recipe ? <span>Gluten Free: {glutenFree ? "Yes" : "No"}</span> : ""}
        <h4>{title}</h4>
        <span>
          {recipe
            ? analyzedInstructions[0].steps.map((step) => step.step).join(" ")
            : comment}
        </span>
      </div>
    </div>
  );
};

export default DisplayCard;
