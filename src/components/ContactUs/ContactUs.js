import React from "react";
import img from "../../imgs/contact-background.png";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <div className="contactus">
        <div className="contactus-img">
          <img src={img} alt="" />
        </div>
        <div className="container">
          <div className="contactus-content">
            <h1>Title here</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              molestias laboriosam esse blanditiis iure iusto amet facilis magni
              et
            </p>
            <form>
              <input type="text" placeholder="Your Email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
