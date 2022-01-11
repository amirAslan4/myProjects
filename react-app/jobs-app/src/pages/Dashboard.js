import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

//Components
import Navbar from "../components/Navbar";
import FormRow from "../components/FormRow";
import Jobs from "../components/Jobs";

//Context
import { JobsContext } from "../context/JobsContextProvider";

//Styled-Components
import styled from "styled-components";
const Wrapper = styled.div`
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

  form {
    margin: 3rem auto;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    padding: 1.5rem;
    width: 100%;

    @media screen and (max-width: 576px) {
      padding: 40px 10px !important;

      .form-group {
        margin: auto;
      }

      button {
        margin: auto;
      }
    }

    .form-group {
      flex: 3;
      margin-right: 25px;
    }

    input {
      padding: 0.75rem;
      border: 1px solid #e2e8f0;
      background: #f8fafc;
      border-radius: 4px;
      font-size: 17px;
      width: 100%;

      &::placeholder {
        font-size: 17px;
      }

      &:focus {
        outline: 1px solid #645cff;
      }
    }

    button {
      padding: 0.75rem;
      height: 45px;
      flex: 1;
      background: #645cff;
      border: none;
      cursor: pointer;
      color: #fff;
      border-radius: 4px;
      font-size: 17px;
      transition: all 0.4s;

      &:hover {
        background: #312ba0;
      }
    }

    @media screen and (max-width: 992px) {
      flex-direction: column;
      padding: 40px 40px 40px 60px;

      .form-group {
        width: 100%;
        margin-bottom: 40px;
      }

      button {
        width: 100%;
        margin-right: 30px;
      }
    }
  }
`;

const Dashboard = () => {
  const [values, setValues] = useState({ position: "", company: "" });
  const { user, fetchAllJobs, isLoading, createJob } = useContext(JobsContext);

  const { position, company } = values;

  useEffect(() => {
    fetchAllJobs();
  }, []);

  const changeHandler = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (position && company) {
      createJob({ position, company });

      setValues({ position: "", company: "" });
    }
  };

  return (
    <Wrapper>
      {!user && <Navigate to="/" />}
      <Navbar />
      <form onSubmit={submitHandler}>
        <FormRow
          type="text"
          value={position}
          changeHandler={changeHandler}
          name="position"
          showLabel={false}
          placeholder="Position"
        />
        <FormRow
          type="text"
          value={company}
          changeHandler={changeHandler}
          name="company"
          showLabel={false}
          placeholder="Company"
        />
        <button type="submit">
          {isLoading ? "Adding New Job..." : "Add Job"}
        </button>
      </form>
      <Jobs />
    </Wrapper>
  );
};

export default Dashboard;
