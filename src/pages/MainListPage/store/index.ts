import { selector } from "recoil";

import api from "../../../api";
import { HouseType } from "../../../api/house";

const KEY = {
  houseListState: "MainListPage/houseListState"
};

export const houseListState = selector<HouseType[]>({
  key: KEY.houseListState,
  get: async () => {
    const response = await api.getHouseList();

    console.log(response);

    // Modeling 추가
    return response;
  }
});
