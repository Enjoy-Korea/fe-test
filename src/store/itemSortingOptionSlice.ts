import { createSlice } from "@reduxjs/toolkit";
import { itemSortingOptionType } from "./../types/itemSortingOptionType";

const itemSortingOptionInitialState: itemSortingOptionType = {
  universe: false,
  houseType: false,
};

export const itemSortingOptionSlice = createSlice({
  name: "itemSortingOption",
  initialState: itemSortingOptionInitialState,
  reducers: {
    resetItemSortingOptionState() {
      return { ...itemSortingOptionInitialState };
    },
    setUniverse(state, action) {
      return { ...state, universe: action.payload };
    },
    setHouseType(state, action) {
      return { ...state, houseType: action.payload };
    },
  },
});
