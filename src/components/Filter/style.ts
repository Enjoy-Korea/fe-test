import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 5% 5% 5% auto;
  margin-bottom: 20px;

  @media (max-width: 959px) {
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
`;

export const Container = styled.div`
  select {
    height: 25px;
    width: 50%;
    @media (max-width: 959px) {
      width: 80%;
      margin-left: 20px;
    }
  }
`;
