import React from "react";
import styled from "styled-components";
import { ItemSortingBox } from "../../components/Item/ItemSortingBox";
import { ItemList } from "./../../components/Item/ItemList";

export const MainListPage = () => {
  return (
    <MainListPageLayout>
      <ItemSortingBox />
      <ItemList />
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
