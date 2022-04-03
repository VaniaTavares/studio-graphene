import { useEffect, useState } from "react";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6,
};

const useObserver = (containerRef) => {
  const [tracker, setTracker] = useState("");

  const intersectionCallBack = (entries) => {
    const watching = entries.find((entry) => entry.isIntersecting);
    if (watching) setTracker(`#${watching.target.id}`);
    else setTracker("");
  };

  useEffect(() => {
    const { current } = containerRef;
    if (current) {
      const test = [...Array.from(current.children)];
      const observer = new IntersectionObserver(intersectionCallBack, options);
      test.forEach((child) => {
        observer.observe(child);
      });
      return () => {
        test.forEach((child) => {
          observer.unobserve(child);
        });
      };
    }
  }, [containerRef]);

  return { tracker };
};

export default useObserver;
