import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/About/AboutContent";
import Footer from "../components/Layouts/Footer";

const Aabout = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="About Us"/>

      <AboutContent />

      <Footer />
    </>
  );
};

export default Aabout;
