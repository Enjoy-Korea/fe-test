import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  padding: 1em 2.5em 2.5em 2.5em;
  box-sizing: border-box;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;

  @media (max-width: 959px) {
    grid-template-columns: 1fr;
  }
`;
