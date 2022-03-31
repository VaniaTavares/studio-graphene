import React, { useEffect, useRef, useState } from "react";
import {
  CommunitySection,
  LandingSection,
  LocationSection,
  MenuSection,
  PopularRecipesSection,
} from "./Sections";
import { Navigation, SectionTracker } from "./Components";
import "./App.css";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6,
};

const App = () => {
  const containerRef = useRef(null);
  const [sectionsToWatch, setSectionsToWatch] = useState([]);
  const [tracker, setTracker] = useState("");
  const intersectionCallBack = (entries) => {
    const watching = entries.find((entry) => entry.isIntersecting);

    if (watching) setTracker(`#${watching.target.id}`);
    else setTracker("");
  };

  useEffect(() => {
    // const observer = new IntersectionObserver(intersectionCallBack, options);
    const { current } = containerRef;
    if (current) {
      setSectionsToWatch((prevSet) => [
        ...prevSet,
        ...Array.from(current.children).splice(3),
      ]);
    }
  }, [containerRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallBack, options);
    if (sectionsToWatch.length === 4) {
      sectionsToWatch.forEach((child) => {
        observer.observe(child);
      });
    }

    return () => {
      if (sectionsToWatch.length) {
        sectionsToWatch.forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, [sectionsToWatch]);

  return (
    <div className="App" ref={containerRef}>
      <Navigation />
      <SectionTracker tracker={tracker} />
      <LandingSection />
      <CommunitySection />
      <LocationSection />
      <MenuSection />
      <PopularRecipesSection />
    </div>
  );
};

export default App;
