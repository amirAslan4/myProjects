import React from "react";
import { Link } from "react-router-dom";

//Icons
import error from "../assets/not-found.svg";

const Error = () => {
  return (
    <div>
      <img src={error} alt="Page Not Found!" />
      <h3>Ohh! page not found</h3>
      <p>We can't seem to find the page you're looking for</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default Error;
