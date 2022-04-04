import React, { useRef } from "react";
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
  const horizontalRef = useRef(null);
  const { data, isError, error, isLoading } = useQuery(
    "recipes",
    () => {
      return axios.get(`${process.env.REACT_APP_RANDOM_RECIPES_API}`);
    },
    {
      cacheTime: 18000000,
      staleTime: 18000000,
      select: (data) => data.data.recipes,
    }
  );

  const handleScroll = (direction) => {
    if (direction === "left") {
      horizontalRef.current.scrollLeft -= 400;
    } else {
      horizontalRef.current.scrollLeft += 400;
    }
  };
  console.log(data[0]);

  return (
    <section
      id="popular-recipes"
      className="flex__center section__padding"
      style={{ position: "relative" }}
    >
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <DisplayErrorMessage messge={error?.message} />
      ) : (
        <>
          <SectionTitle text="Popular Recipes" styles={true} />
          <div className="app__recipes-container" ref={horizontalRef}>
            {data.map((recipe) => (
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
