import React from "react";
import "./Discount.css";
import img3 from "../../imgs/product3.png";
import img1 from "../../imgs/product1.png";

const Discount = () => {
  return (
    <>
      <div className="discount">
        <div className="container">
          <div className="discount-item">
            <div className="discount-img">
              <img src={img1} alt="" />
            </div>
            <div className="discount-content">
              <h1>Discount up to 50% all Excursions</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quisquam, facilis nam modi illo assumenda sed! Cum, tempora
                cumque iure dolorem quod omnis in dicta, facilis quo, quibusdam
                magni quis.
              </p>
              <button>Read more</button>
            </div>
          </div>
          <div className="discount-item">
            <div className="discount-img">
              <img src={img3} alt="" />
            </div>
            <div className="discount-content">
              <h1>January's Promo: Buy 1 Get 1 Free!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                quisquam, facilis nam modi illo assumenda sed! Cum, tempora
                cumque iure dolorem quod omnis in dicta, facilis quo, quibusdam
                magni quis.
              </p>
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
