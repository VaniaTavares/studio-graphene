import React from "react";

import images from "../../Constants/Images";
import "./index.css";
const LandingSection = () => {
  return (
    <div id="home" className="app__home flex__center">
      <h2>Welcome to Our Food Experience</h2>
      <img src={images.home} alt="main image" />
    </div>
  );
};

export default LandingSection;
