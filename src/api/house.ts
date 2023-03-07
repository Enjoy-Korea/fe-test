import data from "../data/houses.mock.json"

// TODO: 타이핑 옮기기
export interface HouseType {
  id: number
  name: string
  description: string
  address: string
  university: string
  houseType: string
  images: {
    url: string
    key: number
  }[]
}

const houseAPI = {
  getHouseList: () => {
    return new Promise<HouseType[]>((resolve) => {
      resolve(data)
    })
  },
  getHouseDetail: (houseId: number) => {
    return new Promise<HouseType | undefined>((resolve) => {
      resolve(data.find((house) => house.id === houseId))
    })
  }
}

export default houseAPI
