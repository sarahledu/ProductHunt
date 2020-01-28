import React, { useState } from "react";
import triangle from "./../assets/triangle.svg";

import "./../styles/product.css";

const Product = ({ product }) => {
  const [isGreyed, setIsGreyed] = useState(false);


  return (
    <a
      className={
        isGreyed ? "product-main-container over" : "product-main-container"
      }
      href={product.redirect_url}
      onMouseEnter={() => setIsGreyed(true)}
      onMouseLeave={() => setIsGreyed(false)}
    >
      <div className="container">
        <img src={product.thumbnail.image_url} alt="logo" />
        <div className="info-container">
          <h4>{product.name}</h4>
          <span>{product.tagline}</span>
        </div>
      </div>
      <div className="votes-count">
        <img className="triangle-symbol" src={triangle} alt="triangle" />
        <span>{product.votes_count}</span>
      </div>
    </a>
  );
};

export default Product;
