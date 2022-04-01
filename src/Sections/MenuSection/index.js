import React, { useEffect, useState, useRef } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { MenuColumn, DisplayErrorMessage, Loading } from "../../Components";
import "./index.css";
const fetchMenus = () => {
  return axios.get(`${process.env.REACT_APP_GRAPHENE_API}`);
};

const queryClient = new QueryClient();

const MenuSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const menuRef = useRef(null);
  const handleScroll = () => {
    const newValue = window.pageYOffset - menuRef.current.offsetTop + 80;
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

  const { data, error, isLoading } = useQuery("menus", fetchMenus, {
    cacheTime: 3600000,
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
      ) : error ? (
        <DisplayErrorMessage />
      ) : (
        <>
          <h2 className="section__title">Our Menu</h2>
          <div className="app__menu__container">
            {[...new Set(data.data.map((menu) => menu.type))].map(
              (type, index) => (
                <MenuColumn
                  index={index}
                  type={type}
                  key={type}
                  menus={data.data}
                  offsetY={offsetY}
                />
              )
            )}
          </div>
        </>
      )}
    </section>
  );
};

const MenuWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MenuSection />
    </QueryClientProvider>
  );
};
export default MenuWrapper;
