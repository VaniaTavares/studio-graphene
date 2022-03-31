import React, { useEffect, useState } from "react";
import axios from "axios";

const MenuSection = () => {
  // const [menus, setMenus] = useState([]);
  console.log(process.env.REACT_APP_GRAPHENE_API);
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`https://studiographene-exercise-api.herokuapp.com/foods`, {
        signal: controller.signal,
      })
      .then((res) => {
        console.table(res.data);
      })
      .catch((err) => {
        if (axios.isCancel()) return;
        else console.error(err);
      });

    return () => controller.abort();
  }, []);

  return (
    <section
      id="menu"
      className="section__padding"
      style={{ backgroundColor: "salmon" }}
    >
      <h2 className="section__title">Our Menu</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
        reprehenderit quis quibusdam rem totam eos expedita maxime sint
        voluptatum, numquam tempore exercitationem?
      </p>
    </section>
  );
};

export default MenuSection;
