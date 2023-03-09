import React from "react";
import styled from "styled-components";

export const HorizontalLine = () => {
  return <HorizontalLineLayout />;
};

const HorizontalLineLayout = styled.hr`
  width: 100%;
  height: 1px;

  background: rgba(0, 0, 0, 0.1);
  border: 0;
`;
