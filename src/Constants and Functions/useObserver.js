import { useEffect, useState } from "react";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.8,
};

const useObserver = (containerRef) => {
  const [sectionsToWatch, setSectionsToWatch] = useState([]);
  const [tracker, setTracker] = useState("");

  const intersectionCallBack = (entries) => {
    const watching = entries.find((entry) => entry.isIntersecting);

    if (watching) setTracker(`#${watching.target.id}`);
    else setTracker("");
  };

  useEffect(() => {
    const { current } = containerRef;
    if (current && !sectionsToWatch.length) {
      setSectionsToWatch([...Array.from(current.children)]);
    }
  }, [containerRef, sectionsToWatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallBack, options);
    sectionsToWatch.forEach((child) => {
      observer.observe(child);
    });
    return () => {
      if (sectionsToWatch.length) {
        sectionsToWatch.forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, [sectionsToWatch]);

  return { tracker };
};

export default useObserver;
