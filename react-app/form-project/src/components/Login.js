import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { validation } from "./validation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toastify";
import styles from "./SignUp.module.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validation(data, "login"));
  }, [data, touched]);

  const changeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const focusHandler = (event) => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      notify("success", "You loged in successfully");
    } else {
      notify("error", "Invalid data!");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className={styles.formContainer}
        autoComplete="off"
      >
        <h1 className={styles.header}>Login</h1>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            className={errors.email && touched.email && styles.invalidInput}
            value={data.email}
            type="text"
            name="email"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            className={
              errors.password && touched.password && styles.invalidInput
            }
            value={data.password}
            type="password"
            name="password"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.formButton}>
          <Link to="/signup">Sign Up</Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
