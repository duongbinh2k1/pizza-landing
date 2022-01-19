import React from "react";
import "./Hero.css";
import logo from "../../imgs/logo.png";
import heroImg from "../../imgs/Image.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="hero-content">
            <h1>Italia Food</h1>
            <h3>Loremipsum Dolor</h3>
            <button>Read More</button>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              iusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div className="hero-img">
              <img src={heroImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
