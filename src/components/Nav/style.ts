import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 10% 30% auto;
  align-items: center;
  height: 64px;
  @media (max-width: 959px) {
    grid-template-columns: 20% 40%;
  }
  @media (max-width: 475px) {
    grid-template-columns: 30% 50%;
  }
`;

export const LeftMenu = styled.div`
  span {
    color: #ffb801;
    font-weight: 700;
    cursor: pointer;
  }
  border-right: 2px solid #e5e7eb;
`;

export const RightMenu = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  color: var(--gray-font);
`;
