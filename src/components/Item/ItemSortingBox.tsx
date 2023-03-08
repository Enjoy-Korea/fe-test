import React from "react";
import styled from "styled-components";
import { Checkbox } from "../common/Checkbox";
import { VerticalLine } from "./../common/VerticalLine";

export const ItemSortingBox = () => {
  return (
    <ItemSortingBoxLayout>
      <SortingOption>
        <SortingOptionTitleContainer>
          <SortingOptionTitle>Sort By</SortingOptionTitle>
        </SortingOptionTitleContainer>
        <VerticalLine />
        <CheckboxContainer>
          <Checkbox title="University" />
          <Checkbox title="House Type" />
        </CheckboxContainer>
      </SortingOption>
    </ItemSortingBoxLayout>
  );
};

const ItemSortingBoxLayout = styled.div`
  width: 100%;
  min-height: 10%;

  padding: 10px;
  margin: 20px 0px;

  border: 3px solid rgb(255, 217, 81);
  border-radius: 40px;

  background-color: #fefefe;
`;

const SortingOption = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 10px;
`;

const SortingOptionTitleContainer = styled.div`
  min-width: 20%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SortingOptionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const CheckboxContainer = styled.div`
  min-width: 20%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
