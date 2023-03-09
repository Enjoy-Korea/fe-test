import React, { useMemo } from "react";
import { itemType } from "../../types/itemType";
import houseData from "../../data/houses.mock.json";
import styled from "styled-components";
import { itemSortingOptionType } from "./../../types/itemSortingOptionType";
import { Item } from "./Item";

interface ItemListProps {
  itemSortingOptionState: itemSortingOptionType;
}

export const ItemList = ({ itemSortingOptionState }: ItemListProps) => {
  const itemList = useMemo<itemType[]>(() => {
    const copiedHouseData = [...houseData];

    for (const [sortingOption, isChecked] of Object.entries(
      itemSortingOptionState
    )) {
      if (
        (isChecked && sortingOption === "university") ||
        (isChecked && sortingOption === "houseType")
      ) {
        copiedHouseData.sort((a, b) => {
          if (a[sortingOption] > b[sortingOption]) {
            return 1;
          } else if (a[sortingOption] < b[sortingOption]) {
            return -1;
          } else {
            return 0;
          }
        });
      }
    }

    return copiedHouseData;
  }, [itemSortingOptionState]);

  return (
    <ItemListLayout>
      {itemList.map((item) => (
        <Item item={item} />
      ))}
    </ItemListLayout>
  );
};

const ItemListLayout = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
