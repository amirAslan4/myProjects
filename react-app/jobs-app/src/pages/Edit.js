import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

//Components
import Navbar from "../components/Navbar";
import FormRow from "../components/FormRow";

//Context
import { JobsContext } from "../context/JobsContextProvider";

//Styled-Components
import styled from "styled-components";
const ErrorContainer = styled.div`
  text-align: center;
  padding-top: 6rem;
  font-size: 20px;
  letter-spacing: 2px;

  a {
    background-color: #645cff;
    color: #fff;
    padding: 6px 12px;
    width: 100px;
    height: 60px;
    border: none;
    text-decoration: none;
    border-radius: 4px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 125px;
  min-height: 100vh;

  @media screen and (max-width: 992px) {
    padding: 20px 40px;
  }

  @media screen and (max-width: 576px) {
    padding: 0px 0;
  }

  a {
    display: block;
    text-align: center;
    font-size: 1rem;
    line-height: 1.15;
    background: #222;
    text-decoration: none;
    border-radius: 4px;
    color: #fff;
    padding: 6px 12px;
    height: 30px;
    width: 200px;
    letter-spacing: 1px;
    margin-top: 65px;
    margin-bottom: 50px;
    transition: all 0.3s;

    &:hover {
      background: #5d6c80;
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    }
  }

  form {
    background: #fff;
    padding: 32px 40px;
    min-heiht: 200px;
    border-radius: 4px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.06);

    h3 {
      font-size: 25px;
      letter-spacing: 1px;
    }

    .form-container {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 4;
      margin-right: 10px;

      label {
        margin-bottom: 10px;
        font-size: 15px;
      }

      input {
        width: 100%;
        border-radius: 3px;
        border: 1px solid #e2e8f0;
        background-color: #f8fafc;
        height: 35px;
        padding: 6px 12px;

        &:focus {
          outline: 2px solid #645cff;
        }
      }
    }

    select {
      margin-right: 10px;
      background: #f1f5f9;
      border-radius: 3px;
      border-color: transparent;
      padding: 0.25rem;
      height: 35px;
      font-size: 15px;
      cursor: pointer;

      &:focus {
        outline: 2px solid #645cff;
      }
    }

    button {
      background-color: #645cff;
      color: #fff;
      padding: 6px 12px;
      width: 100px;
      height: 35px;
      border: none;
      text-decoration: none;
      border-radius: 4px;
      cursor: pointer;
      letter-spacing: 1px;
      font-size: 15px;
      transition: all 0.4s;

      &:hover {
        background: #312ba0;
      }
    }

    .success-alert {
      color: #1d9c60;
      font-weight: bold;
    }

    .error-alert {
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
    }
  }

  @media screen and (max-width: 576px) {
    a {
      width: calc(100% - 20px);
      margin: 65px auto 50px;
    }

    form {
      text-align: center;
    }

    h3 {
      margin-bottom: 80px;
    }

    .form-container {
      flex-direction: column !important;
      align-items: flex-start !important;

      .form-group {
        width: 100%;
        margin-bottom: 40px;

        label {
          font-size: 15px;
        }
      }

      button {
        margin-top: 30px;
        width: 100%;
      }
    }
  }
`;

const Edit = () => {
  const [values, setValues] = useState({
    position: "",
    company: "",
    status: "",
  });
  const {
    user,
    isLoading,
    editItem,
    getSingleJob,
    editJob,
    editComplete,
    showAlert,
  } = useContext(JobsContext);
  const { id } = useParams();

  const { position, company, status } = values;

  useEffect(() => {
    getSingleJob(id);
  }, [id]);

  useEffect(() => {
    if (editItem) {
      const { position, company, status } = editItem;

      setValues({ position, company, status });
    }
  }, [editItem]);

  const changeHandler = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (position && company) {
      editJob(id, values);
    }
  };

  if (isLoading && !editItem) {
    return <div className="isLoading"></div>;
  } else if (!editItem) {
    return (
      <ErrorContainer>
        {!user && <Navigate to="/" />}
        <h5>There was an error, please double check your job ID</h5>
        <Link to="/dashboard">Dashboard</Link>
      </ErrorContainer>
    );
  } else {
    return (
      <Container>
        {!user && <Navigate to="/" />}
        <Navbar />
        <div>
          <Link to="/dashboard">Back Home</Link>
        </div>
        <form onSubmit={submitHandler}>
          {editComplete && (
            <p className="success-alert">Success! Edit Complete</p>
          )}
          {showAlert && (
            <p className="error-alert">There Was An Error, Please Try Again</p>
          )}
          <h3>Update Job</h3>
          <div className="form-container">
            <FormRow
              type="text"
              value={position}
              changeHandler={changeHandler}
              showLabel={true}
              name="position"
            />
            <FormRow
              type="text"
              value={company}
              changeHandler={changeHandler}
              showLabel={true}
              name="company"
            />
            <select name="status" value={status} onChange={changeHandler}>
              <option value="pending">pending</option>
              <option value="interview">interview</option>
              <option value="declined">declined</option>
            </select>
            <button type="submit">{isLoading ? "Editing..." : "Edit"}</button>
          </div>
        </form>
      </Container>
    );
  }
};

export default Edit;
