import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Layouts/Footer";

const Contact = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle="Contact Us"/>

      <ContactInfo />

      <ContactForm />

      <Footer />
    </>
  );
};

export default Contact;
