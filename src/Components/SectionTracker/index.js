import React from "react";

import { navbarLinks } from "../../Constants/NavLinks";

const treated = [...navbarLinks];
treated.shift();
const SectionTracker = () => {
  return (
    <div
      className="app__section-tracker"
      style={{ height: "300px", position: "fixed", top: "50vh" }}
    >
      {treated.map((link) => (
        <div key={link.id} style={{ width: "5vw", position: "relative" }}>
          {link.id.substring(2)}
          <div
            style={{
              height: "1px",
              width: "50%",
              backgroundColor: "black",
              position: "absolute",
              top: "50%",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default SectionTracker;
