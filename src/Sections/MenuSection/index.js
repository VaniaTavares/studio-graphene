import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = ({ title, description, price }) => {
  return (
    <div style={{ flexDirection: "column" }} className="flex__center">
      <h4>{title}</h4>
      <p style={{ overflowWrap: "break-word" }}>{description}</p>
      <span style={{ border: "1px solid black", padding: "0.25rem" }}>
        {price}
      </span>
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
  console.table(menus);
  console.table(types);
  return (
    <section
      id="menu"
      className="section__padding"
      style={{ backgroundColor: "salmon" }}
    >
      <h2 className="section__title">Our Menu</h2>
      <div style={{ flexDirection: "row" }} className="flex__around">
        {types.length &&
          types.map((type) => (
            <div
              key={type}
              style={{
                flexDirection: "column",
                width: "20vw",
                borderInlineEnd: "2px solid black",
                height: "100%",
              }}
              className="flex__around"
            >
              <h3>{type.split("_").join(" ").toUpperCase()}</h3>
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
