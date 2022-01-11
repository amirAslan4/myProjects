import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./ShopCart.module.css";

//components
import Cart from "./shared/Cart";

//Context
import { CartContext } from "../context/CartContextProvider";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.productsContainer}>
        {state.selectedItems.map((product) => (
          <Cart key={product.id} data={product} />
        ))}
      </div>

      {state.itemsCounter > 0 && (
        <aside>
          <p>
            <span>Total items : </span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total payments : </span>
            {state.total} $
          </p>
          <div className={styles.buttonContainer}>
            <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
            <button onClick={() => dispatch({ type: "CHECKOUT" })}>
              Check up
            </button>
          </div>
        </aside>
      )}

      {state.checkout && (
        <div className={styles.checkoutContainer}>
          <h3>Checked up successfully</h3>
          <Link to="/products">Buy more</Link>
        </div>
      )}

      {state.itemsCounter === 0 && !state.checkout && (
        <div className={styles.clearContainer}>
          <h3>Want to Buy?</h3>
          <Link to="/products">Go to Shop</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
