import React from "react";
import styled from "styled-components";
import { HorizontalLine } from "./HorizontalLine";

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <SectionTitleLayout>
      <HorizontalLine width={40} />
      <Title>{title}</Title>
      <HorizontalLine width={40} />
    </SectionTitleLayout>
  );
};

const SectionTitleLayout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);

  margin: 50px 10px;

  white-space: nowrap;
`;
