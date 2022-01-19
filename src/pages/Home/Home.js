import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import ContactUs from "../../components/ContactUs/ContactUs";
import Discount from "../../components/Discount/Discount";
import Header from "../../components/Header/Header";
import Info from "../../components/Info/Info";
import Product from "../../components/Product/Product";

const Home = () => {
  return (
    <>
      <Header />
      <Product />
      <Info />
      <Discount />
      <Banner />
      <ContactUs />
      <AboutUs />
    </>
  );
};

export default Home;
