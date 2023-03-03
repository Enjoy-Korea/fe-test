import React from "react";
import styled from "styled-components";

type TagStatusType = "info" | "warning" | "success";
// type TagStatusColorType = {
//   [key in TagStatusType]: {
//     color: string;
//     bgColor: string;
//   };
// };

interface TagProps {
  type: TagStatusType;
  text: string;
}

const TagColor = {
  info: {
    color: "blue",
    bgColor: "skyblue"
  },
  warning: {
    color: "red",
    bgColor: "pink"
  },
  success: {
    color: "green",
    bgColor: "lime"
  }
};

const Container = styled.span<{ type: TagStatusType }>`
  width: fit-content;
  font-size: 14px;
  font-weight: 500;
  color: ${({ type }) => TagColor[type].color};
  background-color: ${({ type }) => TagColor[type].bgColor};
  border-radius: 6px;
  padding: 4px 8px;
`;

export default function Tag({ type = "info", text = "" }: TagProps) {
  return <Container type={type}>{text}</Container>;
}
