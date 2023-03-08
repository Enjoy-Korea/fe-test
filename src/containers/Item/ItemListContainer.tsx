import React from "react";
import { ItemList } from "./../../components/Item/ItemList";
import { useAppSelector } from "./../../store/store";

export const ItemListContainer = () => {
  const itemSortingOptionState = useAppSelector(
    (state) => state.itemSortingOption
  );

  return <ItemList itemSortingOptionState={itemSortingOptionState} />;
};
