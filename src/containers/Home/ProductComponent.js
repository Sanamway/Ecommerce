import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";
const ProductComponent = () => {
  const product = useSelector((state) => state.allProducts.products);
  const renderList = product.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="row justify-content-start">
        <div className="item">
          <img
            className="card-img-top  rounded mx-auto d-block"
            src={image}
            alt={title}
          />
        </div>

        <div className="body">
          <h5 className="title">{title}</h5>
          <p className="text">
            ${price} {category}
          </p>
        </div>
      </div>
    );
  });
  return <div className="container">{renderList}</div>;
};
export default ProductComponent;
