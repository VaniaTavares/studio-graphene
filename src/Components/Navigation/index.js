import React from "react";

import { navbarLinks } from "../../Constants/NavLinks";
import "./index.css";

const Navigation = () => {
  return (
    <div className="app__navigation">
      <ul className="app__navigation-links">
        {navbarLinks.map((link) => (
          <li key={link.id}>
            <a href={`${link.refLink}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
