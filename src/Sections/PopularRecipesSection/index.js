import React, { useRef } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { Loading, DisplayErrorMessage, DisplayCard } from "../../Components";
import useRecipes from "../../Constants and Functions/useRecipes";

import "./index.css";

const PopularRecipesSection = () => {
  const { isLoading, isError, recipes } = useRecipes();
  const horizontalRef = useRef(null);
  if (isLoading) return <Loading />;
  else if (isError) return <DisplayErrorMessage />;

  const handleScroll = (direction) => {
    if (direction === "left") {
      horizontalRef.current.scrollLeft -= 400;
    } else {
      horizontalRef.current.scrollLeft += 400;
    }
  };
  return (
    <section
      id="popular-recipes"
      className="flex__start section__padding"
      style={{ position: "relative", top: "20vh" }}
    >
      <h2 className="section__title">Popular Recipes</h2>
      <div className="app__recipes-container" ref={horizontalRef}>
        {recipes.map((recipe) => (
          <DisplayCard
            recipe={recipe}
            image={recipe.image}
            title={recipe.title}
            key={recipe.id + Math.random() * 10}
            direction="column"
          />
        ))}
      </div>
      <div>
        <BsFillArrowLeftSquareFill
          onClick={() => handleScroll("left")}
          fontSize={30}
          color="#771e21"
        />{" "}
        <BsFillArrowRightSquareFill
          onClick={() => handleScroll("right")}
          color="#771e21"
          fontSize={30}
        />
      </div>
    </section>
  );
};

export default PopularRecipesSection;
