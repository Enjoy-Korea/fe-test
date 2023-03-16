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
