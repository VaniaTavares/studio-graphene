import React, { useRef, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
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

import images from "../../Constants and Functions/Images";
import "./index.css";

const PopularRecipesSection = ({ tracker }) => {
  const [recipes, setRecipes] = useState([]);
  const onSuccess = (info) => {
    setRecipes(info?.data.recipes);
  };
  const horizontalRef = useRef(null);
  const { isError, error, isLoading } = useQuery(
    "recipes",
    () => {
      return axios.get(`${process.env.REACT_APP_RANDOM_RECIPES_API}`);
    },
    {
      cacheTime: 18000000,
      staleTime: 18000000,
      onSuccess,
    }
  );

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
      {isLoading || recipes?.length === 0 ? (
        <Loading />
      ) : isError ? (
        <DisplayErrorMessage messge={error?.message} />
      ) : (
        <>
          <SectionTitle text="Popular Recipes" styles={true} />
          <div className="app__recipes-container" ref={horizontalRef}>
            {recipes?.length > 0 &&
              recipes.map((recipe) => (
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
