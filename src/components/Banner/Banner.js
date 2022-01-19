import React from "react";
import pizzaBacground from "../../imgs/pizza-background.png";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner-img">
          <img src={pizzaBacground} alt="" />
        </div>
        <div className="container">
          <div className="banner-content">
            <h1>Lorem Ipsum Dolor Sit Amer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              magnam fuga vero suscipit ea iure repellendus deserunt officia
              incidunt laboriosam dolorum ipsa omnis ullam, est veniam fugiat
              voluptate officiis velit.
            </p>
          </div>
          <div className="banner-grid">
            <div className="banner-item">
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit,
                tation omne ullamco laboris nisi ut aliqolore.
              </p>
            </div>
            <div className="banner-item">
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit,
                tation omne ullamco laboris nisi ut aliqolore.
              </p>
            </div>
            <div className="banner-item">
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit,
                tation omne ullamco laboris nisi ut aliqolore.
              </p>
            </div>
          </div>
          <div className="banner-footer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quo
              iusto corporis,
            </p>
            <span>Lorem Ipsum</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
