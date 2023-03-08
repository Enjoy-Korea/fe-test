import React from "react";
import styled from "styled-components";

interface VerticalLineProps {
  height: number;
}

export const VerticalLine = ({ height }: VerticalLineProps) => {
  return <VerticalLineLayout height={height} />;
};

interface VerticalLineLayoutProps {
  height: number;
}

const VerticalLineLayout = styled.div<VerticalLineLayoutProps>`
  width: 0px;
  height: ${(props) => `${props.height}px`};

  border: 0.5px solid rgba(0, 0, 0, 0.3);

  margin: 0px 30px;
`;
