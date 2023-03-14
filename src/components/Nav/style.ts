import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  padding-left: 2.5em;
  justify-content: flex-start;
  align-items: center;
  height: 64px;
`;

export const LeftMenu = styled.div`
  width: 10%;
  span {
    color: #ffb801;
    font-weight: 700;
  }
  border-right: 2px solid #e5e7eb;
`;

export const RightMenu = styled.ul`
  display: flex;
  width: 20%;
  justify-content: space-evenly;
  list-style-type: none;
  color: var(--gray-font);
`;
