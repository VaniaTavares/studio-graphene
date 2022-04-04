import React, { useRef, useEffect } from "react";
import {
  CommunitySection,
  LandingSection,
  MenuSection,
  PopularRecipesSection,
} from "./Sections";
import { Navigation, SectionTracker } from "./Components";
import useObserver from "./Constants and Functions/useObserver";
import "./App.css";

const App = () => {
  const containerRef = useRef(null);
  const { tracker } = useObserver(containerRef);
  useEffect(() => {
    setTimeout(() => setLoader(false), 10000);
  }, []);
  return (
    <>
      <Navigation />
      <SectionTracker tracker={tracker} />
      <div className="App" ref={containerRef}>
        <LandingSection />
        <CommunitySection />
        <MenuSection />
        <PopularRecipesSection tracker={tracker} />
      </div>
    </>
  );
};

export default App;
