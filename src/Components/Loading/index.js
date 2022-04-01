import React from "react";
import images from "../../Constants and Functions/Images";
import "./index.css";
const Loading = ({ top }) => {
  return (
    <div className="app__loading" style={{ top: `${top}` }}>
      <img src={images.loading} alt="loading..." />
    </div>
  );
};

export default Loading;
