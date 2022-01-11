import React, { useContext, useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";

//Icons
import logo from "../assets/logo.svg";

//Context
import { JobsContext } from "../context/JobsContextProvider";

//Styled-Components
import styled from "styled-components";
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;

  @media (max-width: 576px) {
    padding: 0 10px;
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 0.5rem;
      position: relative;
      padding: 8px 15px;
      height: 30px;
      margin-bottom: 9px;
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

    .logout {
      background: #fff;
      border: none;
      cursor: pointer;
      color: #645cff;
      height: 45px;
      font-size: 17px;
      transition: all 0.4s;

      &:hover {
        box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logout } = useContext(JobsContext);

  return (
    <Nav>
      <img src={logo} alt="LOGO" />
      <div className="btn-container">
        <button
          className="btn"
          type="button"
          onClick={() => setShowLogout(!showLogout)}
        >
          <FaUserCircle />
          {user}
          <FaCaretDown />
        </button>
        {showLogout && (
          <button className="logout" type="button" onClick={() => logout()}>
            Logout
          </button>
        )}
      </div>
    </Nav>
  );
};

export default Navbar;
