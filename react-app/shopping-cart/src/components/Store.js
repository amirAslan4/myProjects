import React, { useContext } from "react";

//Styles
import styles from "./Store.module.css";

//components
import Product from "./shared/Product";
import Loader from "./Loader";

//Context
import { ProductsContext } from "../context/ProductContextProvider";

const Store = () => {
  const products = useContext(ProductsContext);
  return (
    <div className={styles.container}>
      {products.length ? (
        products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Store;
