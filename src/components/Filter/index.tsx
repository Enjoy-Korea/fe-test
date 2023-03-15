import { FilterProps, HouseInfo } from "../../types";
import * as S from "./style";

const Filter = ({
  houseInfo,
  selectedHouseType,
  handleHouseTypeChange,
}: FilterProps) => {
  const houseTypes: string[] = Array.from(
    new Set(houseInfo.map((house: HouseInfo) => house.houseType))
  );
  return (
    <S.Wrapper>
      <h2>Filters</h2>
      <h3>House Type</h3>
      <S.Container>
        <select value={selectedHouseType} onChange={handleHouseTypeChange}>
          {houseTypes.map((type: string) => (
            <option>{type}</option>
          ))}
        </select>
      </S.Container>
    </S.Wrapper>
  );
};

export default Filter;
