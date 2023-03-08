import React from "react";
import styled from "styled-components";

export const VerticalLine = () => {
  return <VerticalLineLayout />;
};

const VerticalLineLayout = styled.div`
  width: 0px;
  height: 100%;

  border: 0.5px solid rgba(0, 0, 0, 0.3);

  margin: 0px 30px;
`;
