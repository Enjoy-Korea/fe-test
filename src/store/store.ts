import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { itemSortingOptionSlice } from "./itemSortingOptionSlice";

export const store = configureStore({
  reducer: {
    itemSortingOption: itemSortingOptionSlice.reducer,
  },
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
