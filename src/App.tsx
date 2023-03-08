import React from "react";
import { Router } from "./Router";
import { GlobalStyles } from "./styles/GlobalStyles";
import styled from "styled-components";

function App() {
  return (
    <AppLayout className="App">
      <GlobalStyles />
      <Router />
    </AppLayout>
  );
}

const AppLayout = styled.div`
  width: 80vw;
  min-height: 100vh;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.05);
`;

export default App;
