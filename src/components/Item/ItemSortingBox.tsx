import React from "react";
import styled from "styled-components";
import { Checkbox } from "../common/Checkbox";
import { VerticalLine } from "./../common/VerticalLine";
import { itemSortingOptionType } from "./../../types/itemSortingOptionType";

interface ItemSortingBoxProps {
  itemSortingOptionState: itemSortingOptionType;
  handleUniversityChange: (newUniversityOption: boolean) => void;
  handleHouseTypeChange: (newHouseType: boolean) => void;
}

export const ItemSortingBox = ({
  itemSortingOptionState,
  handleUniversityChange,
  handleHouseTypeChange,
}: ItemSortingBoxProps) => {
  return (
    <ItemSortingBoxLayout>
      <SortingOption>
        <SortingOptionTitleContainer>
          <SortingOptionTitle>Sort By</SortingOptionTitle>
        </SortingOptionTitleContainer>
        <VerticalLine height={80} />
        <CheckboxContainer>
          <Checkbox
            title="University"
            onChecked={handleUniversityChange}
            value={itemSortingOptionState.university}
          />
          <Checkbox
            title="House Type"
            onChecked={handleHouseTypeChange}
            value={itemSortingOptionState.houseType}
          />
        </CheckboxContainer>
      </SortingOption>
    </ItemSortingBoxLayout>
  );
};

const ItemSortingBoxLayout = styled.div`
  width: 80%;
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
