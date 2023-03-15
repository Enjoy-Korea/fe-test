import { Dispatch, SetStateAction } from "react";

export type HouseInfo = {
  id: number;
  name: string;
  description: string;
  address: string;
  university: string;
  houseType: string;
  images: {
    url: string;
    key: number;
  }[];
};

export interface SearchProps {
  handleSearch: (filteredHouses: HouseInfo[]) => void;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  keyPressHandler: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface FilterProps {
  houseInfo: HouseInfo[];
  selectedHouseType: string;
  handleHouseTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
