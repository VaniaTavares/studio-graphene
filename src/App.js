import React, { useEffect, useRef, useState } from "react";
import {
  CommunitySection,
  LandingSection,
  LocationSection,
  MenuSection,
  PopularRecipesSection,
} from "./Sections";
import { Navigation, SectionTracker } from "./Components";
import useObserver from "./Constants and Functions/useObserver";
import "./App.css";

const App = () => {
  const containerRef = useRef(null);
  const { tracker } = useObserver(containerRef);

  return (
    <div className="App" ref={containerRef}>
      <Navigation />
      <SectionTracker tracker={tracker} />
      <LandingSection />
      <CommunitySection tracker={tracker} />
      <LocationSection />
      <MenuSection />
      <PopularRecipesSection />
    </div>
  );
};

export default App;
