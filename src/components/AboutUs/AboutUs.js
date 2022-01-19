import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PhoneIcon from "@material-ui/icons/Phone";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="aboutus">
        <div className="container">
          <div className="about-content">
            <div className="about-left">
              <h1>Title here</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                consequuntur hic voluptas magnam eligendi iure et pariatur,
                quasi error deleniti. Atque delectus quaerat doloremque ducimus
                dignissimos amet, deserunt ad minima.
              </p>
              <div className="about-icons">
                <div className="icon-item">
                  <FacebookIcon style={{ color: "#fff" }} />
                </div>
                <div className="icon-item">
                  <PhoneIcon style={{ color: "#fff" }} />
                </div>
                <div className="icon-item">
                  <TwitterIcon style={{ color: "#fff" }} />
                </div>
              </div>
            </div>
            <div className="about-right">
              <ul>
                <li>About</li>
                <li>History</li>
                <li>Our Team</li>
                <li>Brand Guidelines</li>
                <li>Term&Condition</li>
                <li>Privacy Policy</li>
              </ul>
              <ul>
                <li>Service</li>
                <li>How to Order</li>
                <li>Our Product</li>
                <li>Order Status</li>
                <li>Promo</li>
                <li>Payment Method</li>
              </ul>
              <ul>
                <li>Other</li>
                <li>Contact Us</li>
                <li>Help</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
