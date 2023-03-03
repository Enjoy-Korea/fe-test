import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface SubContentProps {
  title: string;
}

const ContentWrapper = styled.div`
  padding: 18px 0;
  border-bottom: 1px solid gray;

  /* TODO: 마지막 요소 border bottom 제거 */
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #777;
  margin: 0;
  margin-bottom: 8px;
`;

const Content = styled.div``;

export default function SubContent({ title, children }: PropsWithChildren<SubContentProps>) {
  return (
    <ContentWrapper>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </ContentWrapper>
  );
}
