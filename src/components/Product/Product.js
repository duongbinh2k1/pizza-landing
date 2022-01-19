import React from "react";
import "./Product.css";
import img1 from "../../imgs/product1.png";
import img2 from "../../imgs/product2.png";
import img3 from "../../imgs/product3.png";
import ProductItem from "../ProductItem/ProductItem";

const Product = () => {
  const productList = [
    {
      id: 1,
      img: img1,
      title: "Lorem ipsum",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut at sequi beatae? Minus sapiente omnis vitae optio doloremque velit voluptate ea nihil rem itaque consequatur, quibusdam repellendus obcaecati a reprehenderit.",
    },
    {
      id: 2,
      img: img2,
      title: "Lorem ipsum",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut at sequi beatae? ",
    },
    {
      id: 3,
      img: img3,
      title: "Lorem ipsum",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut at sequi beatae? ",
    },
  ];

  return (
    <>
      <div className="product">
        <div className="container">
          <div className="product-content">
            <h1>Lorem Ipsum Dolor</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis nam est ipsum omnis aut, nobis culpa in, sunt
              excepturi deleniti voluptatum?
            </p>
          </div>
          <div className="product-list">
            <ul>
              {productList.map((product) => {
                return (
                  <li key={product.id}>
                    <ProductItem product={product} />
                  </li>
                );
              })}
            </ul>
          </div>
          <button>Show more</button>
        </div>
      </div>
    </>
  );
};

export default Product;
