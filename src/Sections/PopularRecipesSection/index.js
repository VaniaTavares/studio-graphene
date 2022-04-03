import React, { useRef } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import {
  Loading,
  DisplayErrorMessage,
  DisplayCard,
  SectionTitle,
} from "../../Components";
import useRecipes from "../../Constants and Functions/useRecipes";
import images from "../../Constants and Functions/Images";
import "./index.css";

const PopularRecipesSection = ({ tracker }) => {
  const { isLoading, isError, recipes } = useRecipes();
  const horizontalRef = useRef(null);

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
      className="flex__center section__padding"
      style={{ position: "relative" }}
    >
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <DisplayErrorMessage />
      ) : (
        <>
          <SectionTitle text="Popular Recipes" styles={true} />
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
          <div
            className={
              tracker === "#popular-recipes"
                ? "app__recipes__image animate"
                : "app__recipes__image"
            }
          >
            <img src={images.loading} alt="dish" />
          </div>
        </>
      )}
    </section>
  );
};

export default PopularRecipesSection;
