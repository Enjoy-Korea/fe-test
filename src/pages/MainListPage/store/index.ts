import { atom, selector } from "recoil";

import api from "../../../api";
import { HouseType } from "../../../api/house";

interface FilterType {
  university: { [key: string]: boolean };
  houseType: { [key: string]: boolean };
}

const KEY = {
  houseListState: "MainListPage/houseListState",
  filterdHouseListState: "MainListPage/filterdHouseListState",
  filterState: "MainListPage/filterState",
  universityFilterState: "MainListPage/universityFilterState",
  houseTypeFilterState: "MainListPage/houseTypeFilterState",
  houseTypeWithCountState: "MainListPage/houseTypeWithCountState",
  universityFilteredHouseListState: "MainListPage/universityFilteredHouseListState"
};

// MEMO: 합쳐진 filter 정보
export const filterState = atom<FilterType>({
  key: KEY.filterState,
  default: selector({
    key: `${KEY.filterState}/default`,
    get: ({ get }) => {
      const universityfilter = get(universityFilterState);
      const houseTypefilter = get(houseTypeFilterState);

      return {
        university: universityfilter,
        houseType: houseTypefilter
      };
    }
  })
});

export const universityFilterState = selector<{ [key: string]: boolean }>({
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

    return universityObj as { [key: string]: boolean };
  }
});

export const houseTypeFilterState = selector<{ [key: string]: boolean }>({
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

    return houseTypeObj as { [key: string]: boolean };
  }
});

// MEMO: 실제 api에서 처음 가져온 house 리스트 데이터 / read only
export const houseListState = selector<HouseType[]>({
  key: KEY.houseListState,
  get: async () => {
    const response = await api.getHouseList();

    console.log(response);

    // Modeling 추가
    return response;
  }
});

// MEMO: 필터에 따라 리스트에 나타나는 house들
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
      if (isHouseTypeAllFalse) {
        return filterObj?.university[house.university];
      } else if (isUniversityAllFalse) {
        return filterObj?.houseType[house.houseType];
      }
      return filterObj?.university[house.university] && filterObj?.houseType[house.houseType];
    });

    return filteredHouseList;
  }
});

// MEMO: only for house type and count / Read Only
export const universityFilteredHouseListState = selector({
  key: KEY.universityFilteredHouseListState,
  get: ({ get }) => {
    const filterObj = get(filterState);
    const houseList = get(houseListState);

    const isUniversityAllFalse = Object.values(filterObj?.university).every((value) => !value);

    if (!filterObj || isUniversityAllFalse) {
      return houseList;
    }

    const filteredHouseList = houseList.filter((house) => {
      return filterObj?.university[house.university];
    });

    return filteredHouseList;
  }
});

export const houseTypeWithCountState = selector({
  key: KEY.houseTypeWithCountState,
  get: ({ get }) => {
    const houseList = get(universityFilteredHouseListState);
    const houseTypeObj = get(houseTypeFilterState);

    const defaultHouseTypeObj = Object.keys(houseTypeObj).reduce(
      (obj, cur) => ({
        ...obj,
        [cur]: 0
      }),
      {} as { [key: string]: number }
    );

    const houseListVariation = houseList.reduce(
      (obj, cur) => ({
        ...obj,
        [cur.houseType]: (obj[cur.houseType] || 0) + 1
      }),
      defaultHouseTypeObj
    );

    return houseListVariation;
  }
});
