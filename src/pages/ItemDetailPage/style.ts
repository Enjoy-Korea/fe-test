import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  padding: 1em 2.5em 2.5em 2.5em;
  box-sizing: border-box;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    padding: 30px 0 30px 0;
    border-bottom: 1px solid var(--gray-font);
  }
  span {
    margin-top: 30px;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 50%;
  }
`;

export const TagContainer = styled.div`
  margin-top: 30px;
  span {
    font-size: 0.9rem;
    background-color: #ebf4ff;
    color: #2586f9;
    padding: 5px 10px 5px 10px;
    border-radius: 7px;
    margin-right: 8px;
  }
`;
