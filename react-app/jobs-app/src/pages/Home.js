import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";

//Icons
import logo from "../assets/logo.svg";
import main from "../assets/main.svg";

//Context
import { JobsContext } from "../context/JobsContextProvider";

//Styled-Components
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 20px 130px;

  @media screen and (max-width: 1200px) {
    padding: 20px 50px;
  }

  section {
    display: flex;
    margin-top: 90px;
  }

  h1 {
    font-weight: bold;
    font-size: 49px;
    color: #0f172a;
  }

  .main {
    width: 40vw;
    margin-left: 80px;
  }

  @media screen and (max-width: 992px) {
    .main {
      display: none;
    }
  }

  p {
    color: #0f172a;
    line-height: 30px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    background: #645cff;
    width: 200px;
    height: 54px;
    text-align: center;
    line-height: 51px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    font-size: 20px;
    margin-top: 40px;
    transition: all 0.4s;

    &:hover {
      background: #312ba0;
    }
  }
`;

const Home = () => {
  const { user } = useContext(JobsContext);

  return (
    <Wrapper>
      {user && <Navigate to="/dashboard" />}
      <nav>
        <img src={logo} alt="LOGO" />
      </nav>
      <section>
        <div>
          <h1>Job Tracking App</h1>
          <p>
            I'm baby viral enamel pin chartreuse cliche retro af selfies kinfolk
            photo booth plaid jianbing actually squid 3 wolf moon lumbersexual.
            Hell of humblebrag gluten-free lo-fi man braid leggings.
          </p>
          <Link to="/register">Login / Register</Link>
        </div>
        <div>
          <img className="main" src={main} alt="Jobs-Logo" />
        </div>
      </section>
    </Wrapper>
  );
};

export default Home;
