import React, { useRef, lazy, Suspense } from "react";
import { CommunitySection, LandingSection, LocationSection } from "./Sections";
import { Navigation, SectionTracker, Loading } from "./Components";
import useObserver from "./Constants and Functions/useObserver";
import "./App.css";
const MenuSection = lazy(() => import("./Sections/MenuSection"));
const PopularRecipesSection = lazy(() =>
  import("./Sections/PopularRecipesSection")
);
const App = () => {
  const containerRef = useRef(null);
  const { tracker } = useObserver(containerRef);
  console.log(tracker);
  return (
    <>
      <Navigation />
      <SectionTracker tracker={tracker} />
      <div className="App" ref={containerRef}>
        <Suspense fallback={<div>Loading...</div>}>
          <LandingSection />
          <CommunitySection />
          <LocationSection />
          <MenuSection />
          <PopularRecipesSection />
        </Suspense>
      </div>
    </>
  );
};

export default App;
