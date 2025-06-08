import React from "react";
import Banner from "../../components/Banner";
import FeaturedArticles from "./FeaturedArticles";
import Categories from "../Home/Categories";
import CommunityHighlight from "./CommunityHighlight";
import Knowledge from "./Knowledge";
const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedArticles />
      <Categories />
      <CommunityHighlight/>
      <Knowledge/>
    </>
  );
};

export default Home;
