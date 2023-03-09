import React from "react";
import styled from "styled-components";
import { itemType } from "./../../types/itemType";
import { Link } from "react-router-dom";

interface ItemProps {
  item: itemType;
}

export const Item = ({ item }: ItemProps) => {
  return (
    <ItemLayout>
      <ItemLink to={`house/${item.id}`}>{item.name}</ItemLink>
    </ItemLayout>
  );
};

const ItemLayout = styled.div`
  width: 80%;
  height: 200px;
`;

const ItemLink = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  border: 2px solid rgb(255, 184, 1);
  border-radius: 10px;

  margin: 10px;
  padding: 20px;

  background-color: #fefefe;

  &:hover {
    opacity: 0.7;
  }
`;
