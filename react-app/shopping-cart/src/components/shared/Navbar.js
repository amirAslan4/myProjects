import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./Navbar.module.css";

//Icons
import shopIcon from "../../assets/icons/shop.svg";

//Context
import { CartContext } from "../../context/CartContextProvider";

const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <div className={styles.navContainer}>
      <div>
        <Link to="/products" className={styles.productsLink}>
          Products
        </Link>
      </div>
      <div className={styles.iconContainer}>
        <Link to="/cart">
          <img src={shopIcon} alt="shopIcon" />
        </Link>
        <span>{state.itemsCounter}</span>
      </div>
    </div>
  );
};

export default Navbar;
