import React from "react";
import Banner from "../../components/Banner";
import FeaturedArticles from "./FeaturedArticles";
import Categories from "../Home/Categories";
const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedArticles />
      <Categories />
    </>
  );
};

export default Home;
