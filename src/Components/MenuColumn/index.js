import React from "react";

const MenuCard = ({ title, description, price }) => {
  return (
    <div className="app__menu-column_card flex__center">
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{price}</span>
    </div>
  );
};
const MenuColumn = ({ type, menus, index, offsetY }) => {
  const multiplier = index % 2 === 0 ? -0.5 : 0.5;
  return (
    <div
      key={type}
      className="app__menu-column"
      style={{ transform: `translateY(${offsetY * multiplier}px)` }}
    >
      <h3 className="section__subtitle" style={{ alignSelf: "flex-start" }}>
        {type.split("_").join(" ")}
      </h3>
      {menus
        .filter((menu) => menu.type === type)
        .map((menu) => (
          <MenuCard
            title={menu.title}
            price={menu.price}
            description={menu.description}
            key={menu.id}
          />
        ))}
      {/* {index !== 3 && (
        <div className="app__menu-vertical_line" key={type + "a"}></div>
      )} */}
    </div>
  );
};

export default MenuColumn;
