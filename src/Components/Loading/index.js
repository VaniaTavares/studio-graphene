import React from "react";
import images from "../../Constants and Functions/Images";
import "./index.css";
const Loading = ({ fixed }) => {
  return (
    <div className={fixed ? "app__loading-fixed" : "app__loading"}>
      <img src={images.loading} alt="loading..." />
    </div>
  );
};

export default Loading;
