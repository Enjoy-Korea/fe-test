import React from "react";
import styled from "styled-components";

interface HorizontalLineProps {
  width?: number;
}

export const HorizontalLine = ({ width }: HorizontalLineProps) => {
  return <HorizontalLineLayout width={width ? width : undefined} />;
};

interface HorizontalLineLayoutProps {
  width?: number;
}

const HorizontalLineLayout = styled.hr<HorizontalLineLayoutProps>`
  width: ${(props) => (props.width ? `${props.width}%` : "90%")};
  height: 1px;

  background: rgba(0, 0, 0, 0.2);
  border: 0;
`;
