import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./Product.module.css";

//Functions
import { shorten } from "../../helper/functions";
import { isInCart } from "../../helper/functions";
import { quantityCount } from "../../helper/functions";

//Context
import { CartContext } from "../../context/CartContextProvider";

//Icons
import trashIcion from "../../assets/icons/trash.svg";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);

  return (
    <div className={styles.itemContainer}>
      <img src={productData.image} alt="Product" style={{ width: "200px" }} />
      <h3>{shorten(productData.title)}</h3>
      <p>{productData.price} $</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
          {quantityCount(state, productData.id) === 1 && (
            <button
              className={styles.trashIcon}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img src={trashIcion} alt="trash" />
            </button>
          )}
          {quantityCount(state, productData.id) > 1 && (
            <button
              className={styles.decrease}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}

          {quantityCount(state, productData.id) > 0 && (
            <span className={styles.itemsQuantity}>
              {quantityCount(state, productData.id)}
            </span>
          )}

          {isInCart(state, productData.id) ? (
            <button
              className={styles.increase}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              +
            </button>
          ) : (
            <button
              className={styles.addbutton}
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
