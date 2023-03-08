import React from "react";
import styled from "styled-components";
import { ItemListContainer } from "../../containers/Item/ItemListContainer";
import { ItemSortingBoxContainer } from "./../../containers/Item/ItemSortingBoxContainer";

export const MainListPage = () => {
  return (
    <MainListPageLayout>
      <ItemSortingBoxContainer />
      <ItemListContainer />
    </MainListPageLayout>
  );
};

const MainListPageLayout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 30px;
`;
