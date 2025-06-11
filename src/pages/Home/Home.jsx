import React from "react";
import Banner from "../../components/Banner";
import FeaturedArticles from "./FeaturedArticles";
import Categories from "../Home/Categories";
import CommunityHighlight from "./CommunityHighlight";
import Knowledge from "./Knowledge";
import Map from "../Shared/Map";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
     <Helmet>
        <title>Knowvia | Home</title>
      </Helmet>
      <Banner />
      <FeaturedArticles />
      <Categories />
      <CommunityHighlight/>
      <Knowledge/>
      <Map/>
    </>
  );
};

export default Home;
