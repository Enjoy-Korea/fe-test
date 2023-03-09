import { createSlice } from "@reduxjs/toolkit";
import { IItemSortingOptionState } from "../interfaces/itemInterface";

const itemSortingOptionInitialState: IItemSortingOptionState = {
  university: false,
  houseType: false,
};

export const itemSortingOptionSlice = createSlice({
  name: "itemSortingOption",
  initialState: itemSortingOptionInitialState,
  reducers: {
    resetItemSortingOptionState() {
      return { ...itemSortingOptionInitialState };
    },
    setUniversity(state, action) {
      return { ...state, university: action.payload };
    },
    setHouseType(state, action) {
      return { ...state, houseType: action.payload };
    },
  },
});
