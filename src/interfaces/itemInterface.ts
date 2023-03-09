export interface IItem {
  id: number;
  name: string;
  description: string;
  address: string;
  university: string;
  houseType: string;
  images: IImage[];
}

interface IImage {
  url: string;
  key: number;
}

export interface IItemSortingOptionState {
  university: boolean;
  houseType: boolean;
}
