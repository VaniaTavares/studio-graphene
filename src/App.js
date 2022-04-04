import React, { useRef, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  CommunitySection,
  LandingSection,
  MenuSection,
  PopularRecipesSection,
} from "./Sections";
import { Loading, Navigation, SectionTracker, Footer } from "./Components";
import useObserver from "./Constants and Functions/useObserver";
import "./App.css";

const queryClient = new QueryClient();
const App = () => {
  const containerRef = useRef(null);
  const [loader, setLoader] = useState(true);
  const { tracker } = useObserver(containerRef);
  useEffect(() => {
    if (loader) {
      setTimeout(() => setLoader(false), 8000);
    }
  }, [loader]);
  return (
    <>
      <Navigation loader={loader} />
      <SectionTracker loader={loader} tracker={tracker} />
      {loader ? <Loading fixed={true} /> : ""}
      <QueryClientProvider client={queryClient}>
        <div className={loader ? "app__hide" : "App"} ref={containerRef}>
          <LandingSection />
          <CommunitySection />
          <MenuSection />
          <PopularRecipesSection tracker={tracker} />
        </div>
      </QueryClientProvider>
      <Footer />
    </>
  );
};

export default App;
