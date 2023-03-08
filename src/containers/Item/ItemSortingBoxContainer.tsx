import React from "react";
import { ItemSortingBox } from "../../components/Item/ItemSortingBox";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { itemSortingOptionSlice } from "./../../store/itemSortingOptionSlice";

export const ItemSortingBoxContainer = () => {
  const itemSortingOptionState = useAppSelector(
    (state) => state.itemSortingOption
  );

  const dispatch = useAppDispatch();

  const { setUniversity, setHouseType } = itemSortingOptionSlice.actions;

  const handleUniversityChange = (newUuniversityOption: boolean) => {
    dispatch(setUniversity(newUuniversityOption));
  };

  const handleHouseTypeChange = (newHouseTypeOption: boolean) => {
    dispatch(setHouseType(newHouseTypeOption));
  };

  return (
    <ItemSortingBox
      itemSortingOptionState={itemSortingOptionState}
      handleUniversityChange={handleUniversityChange}
      handleHouseTypeChange={handleHouseTypeChange}
    ></ItemSortingBox>
  );
};
