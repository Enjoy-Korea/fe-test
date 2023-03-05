import { atom, selector } from "recoil";

import api from "../../../api";
import { HouseType } from "../../../api/house";

const KEY = {
  selectedUniversityState: "MainListPage/selectedUniversityState",
  selectedHouseTypeState: "MainListPage/selectedHouseTypeState",
  houseListState: "MainListPage/houseListState",
  filterdHouseListState: "MainListPage/filterdHouseListState",
  filterState: "MainListPage/filterState",
  universityFilterState: "MainListPage/universityFilterState",
  houseTypeFilterState: "MainListPage/houseTypeFilterState"
};

export const selectedUniversityState = atom({
  key: KEY.selectedUniversityState,
  default: []
});

export const selectedHouseTypeState = atom({
  key: KEY.selectedHouseTypeState,
  default: []
});

// TODO: Typing 필요
interface FilterType {
  university?: any;
  houseType?: any;
}

export const filterState = atom<FilterType | null>({
  key: KEY.filterState,
  default: selector({
    key: `${KEY.filterState}/default`,
    get: ({ get }) => {
      const universityfilter = get(universityFilterState);
      const houseTypefilter = get(houseTypeFilterState);

      console.log(universityfilter);

      return {
        university: universityfilter,
        houseType: houseTypefilter
      };
    }
  })
});

// TODO: Typing 다시
export const universityFilterState = selector<{ university: any }>({
  key: KEY.universityFilterState,
  get: ({ get }) => {
    const houseList = get(houseListState);

    const universityList = new Set(houseList.map((house) => house.university));
    const universities = Array.from(universityList); // TODO: spread 연산자로 바꾸기 / typescript option

    const universityObj = universities.reduce(
      (obj, curUniversity) => ({
        ...obj,
        [curUniversity]: false
      }),
      {}
    );

    return universityObj as { university: any };
  }
});

export const houseTypeFilterState = selector<{ houseType: any }>({
  key: KEY.houseTypeFilterState,
  get: ({ get }) => {
    const houseList = get(houseListState);

    const houseTypeList = new Set(houseList.map((house) => house.houseType));
    const houseTypes = Array.from(houseTypeList);

    const houseTypeObj = houseTypes.reduce(
      (obj, curType) => ({
        ...obj,
        [curType]: false
      }),
      {}
    );

    return houseTypeObj as { houseType: any };
  }
});

export const houseListState = selector<HouseType[]>({
  key: KEY.houseListState,
  get: async () => {
    const response = await api.getHouseList();

    console.log(response);

    // Modeling 추가
    return response;
  }
});

export const filterdHouseListState = selector({
  key: KEY.filterdHouseListState,
  get: ({ get }) => {
    const filterObj = get(filterState);
    const houseList = get(houseListState);

    const isUniversityAllFalse = Object.values(filterObj?.university).every((value) => !value);
    const isHouseTypeAllFalse = Object.values(filterObj?.houseType).every((value) => !value);
    const isAllFilterNotSelected = isUniversityAllFalse && isHouseTypeAllFalse;

    if (!filterObj || isAllFilterNotSelected) {
      return houseList;
    }

    const filteredHouseList = houseList.filter((house) => {
      return filterObj?.university[house.university] || filterObj?.houseType[house.houseType];
    });

    return filteredHouseList;
  }
});
