import React from "react";
import {
  CommunitySection,
  LandingSection,
  LocationSection,
  MenuSection,
  PopularRecipesSection,
} from "./Sections";
import Navigation from "./Components/Navigation";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <LandingSection />
      <CommunitySection />
      <LocationSection />
      <MenuSection />
      <PopularRecipesSection />
    </div>
  );
};

export default App;
