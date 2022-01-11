import React from "react";

//Components
import ToDo from "./components/ToDo";

/*=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>*/
//Styles
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f1f5f8;
  width: 100vw;
  height: 100vh;
`;
/*=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>*/

const App = () => {
  return (
    <MainContainer>
      <ToDo />
    </MainContainer>
  );
};

export default App;
