import React, { useState } from "react";
import { GiForkKnifeSpoon, GiKnifeFork } from "react-icons/gi";

import { navbarLinks } from "../../Constants and Functions/NavLinks";
import "./index.css";

const Navigation = ({ loader }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className={loader ? "app__hide" : "app__navigation"}>
      <ul className="app__navigation-links">
        {navbarLinks.map((link) => (
          <li key={link.id}>
            <a href={`${link.refLink}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="app__navigation__small-screen">
        <div
          className="app__navigation__small-screen_circle flex__center"
          onClick={() => setToggleMenu(true)}
        >
          <GiForkKnifeSpoon color="#771e21" fontSize={27} />
        </div>
        {toggleMenu && (
          <div className="app__navigation__small-screen-overlay">
            <GiKnifeFork
              color="#fff"
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
