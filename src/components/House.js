import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function House({ item }) {
  return (
    <HouseContainer>
      <HouseImage src={item.images[0].url} alt={item.name} />
      <Link to={`/${item.id}`}>
        <LinkButton>{item.name}</LinkButton>
      </Link>
    </HouseContainer>
  );
}

const HouseContainer = styled.div`
  width: 35vw;
  height: 40vh;
  margin-bottom: 1rem;
  text-align: center;
`;

const HouseImage = styled.img`
  width: 100%;
  height: 30vh;
  border-radius: 10px;
`;

const LinkButton = styled.button`
  width: 30vw;
  height: 3vh;
  border-radius: 10px;
  background-color: inherit;
  cursor: pointer;
`;

export default House;
