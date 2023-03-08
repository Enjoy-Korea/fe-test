export interface itemType {
  id: number;
  name: string;
  description: string;
  address: string;
  university: string;
  houseType: string;
  images: imageType[];
}

interface imageType {
  url: string;
  key: number;
}
