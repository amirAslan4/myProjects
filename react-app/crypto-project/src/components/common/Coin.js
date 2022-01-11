import React from "react";

//Styles
import styles from "./Coin.module.css";

const Coin = ({ image, name, symbol, price, priceChange, marketCap }) => {
  return (
    <div className={styles.Coin}>
      <img src={image} alt={name} />
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.price}>${price.toLocaleString()}</span>
      <span
        className={
          priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange
        }
      >
        {priceChange.toFixed(2)}%
      </span>
      <span className={styles.marketCap}>${marketCap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;
