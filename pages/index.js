import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomePages/DefaultHome/MainBanner";
import Services from "../components/HomePages/DefaultHome/Services";
import About from "../components/HomePages/DefaultHome/About";
import Team from "../components/Common/Team";
import Footer from "../components/Layouts/Footer";
import PricingStyleThree from "../components/Pricing/PricingStyleThree";

const Index = () => {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Services />

      <About />

      <Team />

      <PricingStyleThree/>

      <Footer />
    </>
  );
};

export default Index;
