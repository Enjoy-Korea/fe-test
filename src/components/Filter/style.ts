import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 10% 10% 10% auto;
  margin-bottom: 20px;

  @media (max-width: 959px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Container = styled.div``;
