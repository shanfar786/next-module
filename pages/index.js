// import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header-one";
import BannerOne from "../components/banner-one";
import PopDestinations from "../components/pop-destinations";
import Subscribe from "../components/subscribe";
import TravelTips from "../components/travel-tips";

import Footer from "../components/footer";


const Home = () => {
  return (
    <>
      <Layout pageTitle="Airvays">
        <HeaderOne />
        <BannerOne />
        <PopDestinations />
        <Subscribe />
        <TravelTips />

        <Footer />
      </Layout>
    </>
  );
};

export default Home;
