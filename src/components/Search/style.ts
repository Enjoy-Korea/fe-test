import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;

  h2 {
    margin: 20px 0 20px 0;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  input {
    border: 1px solid var(--gray-font);
    width: 80%;
    height: 50px;
    border-radius: 10px;
    padding: 16px;
  }

  button {
    border: 1px solid var(--yellow);
    width: 15%;
    height: 50px;
    border-radius: 10px;
    @media (max-width: 959px) {
      font-size: 0.7rem;
    }
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--gray-font);
  margin-bottom: 20px;
`;
