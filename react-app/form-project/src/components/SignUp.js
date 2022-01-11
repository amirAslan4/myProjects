import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { validation } from "./validation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toastify";
import styles from "./SignUp.module.css";

const SignUp = () => {
  console.log("reload");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validation(data, "signup"));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.type === "checkbox") {
      setData({
        ...data,
        [event.target.name]: event.target.checked,
      });
    } else {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
    }
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
      notify("success", "You signed up successfully");
    } else {
      notify("error", "Invalid data!");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
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
        <h1 className={styles.header}>Sign Up</h1>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            className={errors.name && touched.name && styles.invalidInput}
            value={data.name}
            type="text"
            name="name"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
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
        <div className={styles.formGroup}>
          <label>Confirm Password</label>
          <input
            className={
              errors.confirmPassword &&
              touched.confirmPassword &&
              styles.invalidInput
            }
            value={data.confirmPassword}
            type="password"
            name="confirmPassword"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <div className={styles.checkbox}>
            <label>I accept terms of privacy policy</label>
            <input
              value={data.isAccepted}
              type="checkbox"
              name="isAccepted"
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div className={styles.formButton}>
          <Link to="/login">Login</Link>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
