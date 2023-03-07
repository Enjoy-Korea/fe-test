import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface SubContentProps {
  title: string;
}

const ContentWrapper = styled.div`
  padding: 18px 0;
  border-bottom: 1px solid gray;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #777;
  margin: 0;
  margin-bottom: 8px;
`;

export default function SubContent({ title, children }: PropsWithChildren<SubContentProps>) {
  return (
    <ContentWrapper>
      <Title>{title}</Title>
      {children}
    </ContentWrapper>
  );
}
