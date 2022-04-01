import React, { useEffect, useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { MenuColumn, Loading, DisplayErrorMessage } from "../../Components";
import "./index.css";
const fetchMenus = () => {
  return axios.get(`${process.env.REACT_APP_GRAPHENE_API}`);
};

const queryClient = new QueryClient();

const MenuSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetY]);

  const { isLoading, data, error } = useQuery("menus", fetchMenus, {
    cacheTime: 3600000,
  });

  if (isLoading) return <Loading />;
  else if (error) return <DisplayErrorMessage />;

  return (
    <section id="menu" className="flex__start section__padding">
      <h2 className="section__title">Our Menu</h2>
      <div className="app__menu__container flex__center">
        {[...new Set(data.data.map((menu) => menu.type))].map((type, index) => (
          <MenuColumn index={index} type={type} key={type} menus={data.data} />
        ))}
      </div>
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
