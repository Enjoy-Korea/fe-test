import React from "react";
import styled from "styled-components";
import { ItemList } from "../components/ItemList";
import { ItemSortingBox } from "../components/ItemSortingBox";

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

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 50px;
`;
