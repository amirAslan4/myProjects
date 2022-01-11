import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

//Icons
import logo from "../assets/logo.svg";

//Components
import FormInput from "../components/FormRow";

//Context
import { JobsContext } from "../context/JobsContextProvider";

//Styled-Components
import styled from "styled-components";
const Alert = styled.p`
  background: #f8dfda;
  color: #842029;
  padding: 6px 15px;
  border-radius: 3px;
  height: 35px;
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .container {
    background-color: #fff;
    border-top: 5px solid #645cff;
    padding: 32px 40px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 40vw;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  h4 {
    font-size: 27px;
    margin-top: 20px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
    width: 40vw;
  }

  label {
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 10px;
    margin-left: 40px;
  }

  input {
    width: calc(100% - 80px);
    margin: auto;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    height: 32px;
    border-radius: 3px;
    padding-left: 10px;

    &:focus {
      outline: 1px solid #645cff;
    }
  }

  button[type="submit"] {
    background: #645cff;
    border: none;
    cursor: pointer;
    height: 35px;
    padding: 6px 12px;
    color: #fff;
    border-radius: 4px;
    width: calc(100% - 80px);
    margin: auto;
    margin-top: 25px;
    font-size: 17px;
    transition: all 0.4s;

    &:hover {
      background: #312ba0;
    }
  }

  .isMember {
    display: flex;
    align-items: center;
    margin-top: 15px;

    button {
      border: none;
      background: none;
      cursor: pointer;
      height: 25px;
      color: #645cff;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 992px) {
    .container,
    .form-group {
      width: 65vw;
    }
  }

  @media screen and (max-width: 576px) {
    .container,
    .form-group {
      width: 100vw;
    }
  }
`;

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    isMember: true,
  });

  const { name, email, password, isMember } = values;

  const { user, isLoading, showAlert, login, register } =
    useContext(JobsContext);

  const changeHandler = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const toggleMember = () => {
    setValues({
      ...values,
      isMember: !isMember,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    isMember ? login({ email, password }) : register({ name, email, password });
  };

  return (
    <>
      {showAlert && <Alert>There Was An Error, Please Try Again</Alert>}
      <Wrapper>
        <div className="container">
          {user && <Navigate to="/dashboard" />}

          <div>
            <img src={logo} alt="Logo" />
            <h4>{isMember ? "Login" : "Register"}</h4>
          </div>
          <form onSubmit={submitHandler}>
            {/* Name field */}
            {!isMember && (
              <FormInput
                type="text"
                name="name"
                value={name}
                changeHandler={changeHandler}
                showLabel={true}
              />
            )}

            {/* Email field */}

            <FormInput
              type="text"
              name="email"
              value={email}
              changeHandler={changeHandler}
              showLabel={true}
            />
            {/* Password field */}

            <FormInput
              type="password"
              name="password"
              value={password}
              changeHandler={changeHandler}
              showLabel={true}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Fetchin User..." : "Submit"}
            </button>
          </form>
          <div className="isMember">
            <p>{isMember ? "Not a member yet?" : "Already a member?"}</p>
            <button type="button" onClick={toggleMember}>
              {isMember ? "Register" : "Login"}
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Register;
