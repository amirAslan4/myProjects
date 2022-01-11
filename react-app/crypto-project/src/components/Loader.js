import React from "react";

//Gif
import spinner from "../assets/images/spinner.gif";

//Styles
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <img src={spinner} alt="Loading..." />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loader;
