import React from "react";

//Gif
import spinner from "../assets/icons/spinner.gif";

//Styles
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <img src={spinner} alt="Loading..." />
      <h2>...چند لحظه صبر کنید</h2>
    </div>
  );
};

export default Loader;
