import React, { useEffect, useState, useRef } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import {
  MenuColumn,
  DisplayErrorMessage,
  Loading,
  SectionTitle,
} from "../../Components";
import "./index.css";
const fetchMenus = () => {
  return axios.get(`${process.env.REACT_APP_GRAPHENE_API}`);
};

const MenuSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [menus, setMenus] = useState([]);
  const [types, setTypes] = useState([]);

  const onSuccess = (info) => {
    setMenus(info?.data);
    const arrayTent = info?.data.map((menu) => menu.type);
    setTypes(
      arrayTent.filter((type, index) => arrayTent.indexOf(type) === index)
    );
  };
  const menuRef = useRef(null);
  const handleScroll = () => {
    const newValue = window.pageYOffset - menuRef.current.offsetTop;
    if (newValue > 0 && menuRef.current.clientWidth > 849) {
      setOffsetY(newValue);
    } else if (newValue > 0 && menuRef.current.clientWidth > 549) {
      setOffsetY(newValue / 2);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { isError, error, isLoading } = useQuery("menus", fetchMenus, {
    cacheTime: 3600000,
    staleTime: 3600000,
    refetchOnMount: false,
    onSuccess,
  });

  return (
    <section
      id="menu"
      className="flex__start section__padding"
      style={{ position: "relative", overflow: "auto" }}
      ref={menuRef}
    >
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <DisplayErrorMessage message={error?.message} />
      ) : (
        <>
          <SectionTitle text="Our Menu" />
          <div className="app__menu__container">
            {types.map((type, index) => (
              <MenuColumn
                index={index}
                type={type}
                key={type}
                menus={menus}
                offsetY={offsetY}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default MenuSection;
