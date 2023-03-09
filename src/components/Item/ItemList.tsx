import React, { useMemo } from "react";
import houseData from "../../data/houses.mock.json";
import styled from "styled-components";
import { Item } from "./Item";
import { IItem, IItemSortingOptionState } from "../../interfaces/itemInterface";
import { ITEM_SORTING_OPTIONS } from "../../constants/itemSortingOptions";
import { sortItem } from "./../../utils/sortItem";

interface ItemListProps {
  itemSortingOptionState: IItemSortingOptionState;
}

export const ItemList = ({ itemSortingOptionState }: ItemListProps) => {
  const itemList = useMemo<IItem[]>(() => {
    const copiedHouseData = [...houseData];

    for (const [sortingOption, isChecked] of Object.entries(
      itemSortingOptionState
    )) {
      if (isChecked) {
        if (sortingOption === ITEM_SORTING_OPTIONS.UNIVERSITY) {
          sortItem(copiedHouseData, sortingOption, true);
        } else if (sortingOption === ITEM_SORTING_OPTIONS.HOUSETYPE) {
          sortItem(copiedHouseData, sortingOption, true);
        }
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
