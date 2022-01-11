import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

//Styles
import styles from "./ProductDetails.module.css";

//Context
import { ProductsContext } from "../context/ProductContextProvider";

const ProductDetails = (props) => {
  const { id } = useParams();
  const products = useContext(ProductsContext);
  const product = products[id - 1];
  const { image, title, price, category, description } = product;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <img src={image} alt="Product" />
        <div className={styles.info}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>
            <span>Category :</span> {category}
          </p>
          <div className={styles.buttonContainer}>
            <span>{price} $</span>
            <Link to="/products">Back to Shop</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
