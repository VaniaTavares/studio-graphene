import React from "react";
import images from "../../Constants and Functions/Images";
import "./index.css";
const Loading = () => {
  return (
    <div className="app__loading">
      <img src={images.loading} alt="loading..." />
    </div>
  );
};

export default Loading;
