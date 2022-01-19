import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <Navbar />
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Header;
