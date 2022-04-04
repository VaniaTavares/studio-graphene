import React, { useRef, useEffect, useState } from "react";
import {
  CommunitySection,
  LandingSection,
  MenuSection,
  PopularRecipesSection,
} from "./Sections";
import { Loading, Navigation, SectionTracker } from "./Components";
import useObserver from "./Constants and Functions/useObserver";
import "./App.css";

const App = () => {
  const containerRef = useRef(null);
  const [loader, setLoader] = useState(true);
  const { tracker } = useObserver(containerRef);
  useEffect(() => {
    setTimeout(() => setLoader(false), 10000);
  }, []);
  return (
    <>
      <Navigation loader={loader} />
      {loader ? <Loading fixed={true} /> : ""}
      <div className={loader ? "app__hide" : "App"} ref={containerRef}>
        <SectionTracker tracker={tracker} />
        <LandingSection />
        <CommunitySection />
        <MenuSection />
        <PopularRecipesSection tracker={tracker} />
      </div>
    </>
  );
};

export default App;
