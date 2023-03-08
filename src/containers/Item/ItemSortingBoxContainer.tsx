import React from "react";
import { ItemSortingBox } from "../../components/Item/ItemSortingBox";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { itemSortingOptionSlice } from "./../../store/itemSortingOptionSlice";

export const ItemSortingBoxContainer = () => {
  const itemSortingOptionState = useAppSelector(
    (state) => state.itemSortingOption
  );

  const dispatch = useAppDispatch();

  const { setUniverse, setHouseType } = itemSortingOptionSlice.actions;

  const handleUniverseChange = (newUniverseOption: boolean) => {
    dispatch(setUniverse(newUniverseOption));
  };

  const handleHouseTypeChange = (newHouseTypeOption: boolean) => {
    dispatch(setHouseType(newHouseTypeOption));
  };

  return (
    <ItemSortingBox
      itemSortingOptionState={itemSortingOptionState}
      handleUniverseChange={handleUniverseChange}
      handleHouseTypeChange={handleHouseTypeChange}
    ></ItemSortingBox>
  );
};
