import React, { useState } from "react";
import { GiForkKnifeSpoon, GiKnifeFork } from "react-icons/gi";

import { navbarLinks } from "../../Constants/NavLinks";
import "./index.css";

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navigation">
      <ul className="app__navigation-links">
        {navbarLinks.map((link) => (
          <li key={link.id}>
            <a href={`${link.refLink}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="app__navigation__small-screen">
        <GiForkKnifeSpoon
          color="#494949"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navigation__small-screen-overlay">
            <GiKnifeFork
              color="#494949"
              fontSize={27}
              onClick={() => setToggleMenu(false)}
              className="overlay__close"
            />
            <ul className="app__navbar-smallscreen_links">
              {navbarLinks.map((link) => (
                <li key={link.id + "xs"}>
                  <a href={`${link.refLink}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
