import React from "react";
import styled from "styled-components";

export const ItemSortingBox = () => {
  return <ItemSortingBoxLayout>ItemSortingBox</ItemSortingBoxLayout>;
};

const ItemSortingBoxLayout = styled.div`
  width: 100%;
  height: 100px;

  padding: 10px;

  border: 3px solid rgb(255, 217, 81);
  border-radius: 10px;

  background-color: #fefefe;
`;
