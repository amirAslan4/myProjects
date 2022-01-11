import React, { useEffect } from "react";

/*=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>>=>=>=>>=>=>=>*/

//styled-component
import styled from "styled-components";

const AlertError = styled.p`
  color: #721c24;
  background: #f8d7da;
  font-size: 0.8rem;
  letter-spacing: 3px;
  padding: 2px 20px;
  width: 100%;
  border-radius: 5px;
  text-align: center;
`;

const AlertSuccess = styled.p`
  color: #155724;
  background: #d4edda;
  font-size: 0.8rem;
  letter-spacing: 3px;
  padding: 2px 20px;
  width: 100%;
  border-radius: 5px;
  text-align: center;
`;

/*=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>>=>=>=>>=>=>=>*/

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    setTimeout(() => {
      removeAlert();
    }, 3000);
  }, [msg]);

  let result;
  if (type === "success") {
    result = <AlertSuccess>{msg}</AlertSuccess>;
  } else {
    result = <AlertError>{msg}</AlertError>;
  }

  return result;
};

export default Alert;
