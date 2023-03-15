import { HouseInfo } from "../../types";
import ItemBox from "../ItemBox";
import * as S from "./style";

const MainList = ({ filteredHouses }: any) => {
  console.log(filteredHouses);

  return (
    <S.Wrapper>
      <span> {filteredHouses.length} Houses Available</span>
      {filteredHouses.map((house: HouseInfo) => (
        <ItemBox key={house.id} houseInfo={house} />
      ))}
    </S.Wrapper>
  );
};

export default MainList;
