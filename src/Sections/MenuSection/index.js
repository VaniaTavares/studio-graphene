import React, { useEffect, useState } from "react";
import axios from "axios";

import "./index.css";
const Menu = ({ title, description, price }) => {
  return (
    <div className="app__menu-column_card flex__center">
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{price}</span>
    </div>
  );
};

const MenuSection = () => {
  const [menus, setMenus] = useState([]);
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`${process.env.REACT_APP_GRAPHENE_API}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setMenus(res.data);
        setTypes((prev) => {
          return [...new Set([...prev, ...res.data.map((menu) => menu.type)])];
        });
      })
      .catch((err) => {
        if (axios.isCancel()) return;
        else console.error(err);
      });

    return () => controller.abort();
  }, []);

  return (
    <section id="menu" className="flex__center section__padding">
      <h2 className="section__title">Our Menu</h2>
      <div className="app__menu flex__center">
        {types.length &&
          types.map((type) => (
            <div key={type} className="app__menu-column">
              <h3 className="section__subtitle">{type.split("_").join(" ")}</h3>
              {menus
                .filter((menu) => menu.type === type)
                .map((menu) => (
                  <Menu
                    title={menu.title}
                    price={menu.price}
                    description={menu.description}
                    key={menu.id}
                  />
                ))}
            </div>
          ))}
      </div>
    </section>
  );
};

export default MenuSection;
