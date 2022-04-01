import React from "react";
import images from "../../Constants and Functions/Images";
import "./index.css";
const LandingSection = () => {
  return (
    <section id="home" className="app__home flex__center">
      <h2>Welcome to Ours Food Experience</h2>
      <img src={images.home} alt="home" />
    </section>
  );
};

export default LandingSection;
