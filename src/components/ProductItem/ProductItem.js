import React from "react";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  return (
    <>
      <div className="product-item">
        <div className="item-img">
          <img src={product.img} alt="image" />
        </div>
        <div className="item-content">
          <h3>{product.title}</h3>
          <p>{product.des}</p>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
