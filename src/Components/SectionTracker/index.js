import React from "react";

import { navbarLinks } from "../../Constants and Functions/NavLinks";
import "./index.css";
const treated = [...navbarLinks];
treated.shift();

const SectionTracker = ({ tracker }) => {
  return (
    <div className="app__section-tracker">
      {treated.map((link) => (
        <div key={link.id} className="app__section-tracker_row">
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
