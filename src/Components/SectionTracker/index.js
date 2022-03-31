import React from "react";

import { navbarLinks } from "../../Constants/NavLinks";

const treated = [...navbarLinks];
treated.shift();
const SectionTracker = ({ tracker }) => {
  return (
    <div
      className="app__section-tracker"
      style={{ height: "300px", position: "fixed", top: "50vh", left: "1vw" }}
    >
      {treated.map((link) => (
        <div key={link.id} style={{ width: "50px", position: "relative" }}>
          <p
            className={
              tracker === link.refLink
                ? "p__section__active"
                : "p__section__inactive"
            }
          >
            {link.id.substring(2)}
          </p>
          <div
            className={
              tracker === link.refLink ? "line section__active" : "line"
            }
          ></div>
        </div>
      ))}
    </div>
  );
};

export default SectionTracker;
