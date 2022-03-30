import React from "react";
import {
  CommunitySection,
  LandingSection,
  LocationSection,
  MenuSection,
  PopularRecipesSection,
} from "./Sections";
import Navigation from "./Components/Navigation";
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
