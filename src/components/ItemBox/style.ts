import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 30% 70%;
  @media (max-width: 959px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 250px;
    height: 200px;
    border-radius: 15px;
    cursor: pointer;
    @media (max-width: 1300px) {
      width: 150px;
      height: 100px;
      border-radius: 10px;
    }
    @media (max-width: 959px) {
      width: 100%;
      height: 150px;
      border-radius: 10px;
      object-fit: cover;
    }
  }
`;

export const InfoContainer = styled.div`
  h5 {
    color: var(--gray-font);
    text-decoration: none;
  }
`;

export const TagContainer = styled.div`
  span {
    font-size: 0.9rem;
    background-color: #ebf4ff;
    color: #2586f9;
    padding: 5px 10px 5px 10px;
    border-radius: 7px;
    margin-right: 8px;
  }
`;
