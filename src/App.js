import React from "react";
import {
  CommunitySection,
  LandingSection,
  LocationSection,
  MenuSection,
  PopularRecipesSection,
} from "./Sections";
import { Navigation, SectionTracker } from "./Components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <SectionTracker />
      <LandingSection />
      <CommunitySection />
      <LocationSection />
      <MenuSection />
      <PopularRecipesSection />
    </div>
  );
};

export default App;
