import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import SelectLayout from "../SelectLayout";
import { filterState, houseTypeWithCountState } from "../../store";

// MEMO: CSS 추가 필요
const Label = styled.label`
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const Checkbox = styled.input``;

function HouseTypeSelect() {
  const [filterObject, setFilterObject] = useRecoilState(filterState);
  const houseTypeList = useRecoilValue(houseTypeWithCountState);

  const addFilterToList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const houseType = e.target.id;
    const isChecked = e.target.checked;

    setFilterObject((obj) => ({
      ...obj,
      houseType: {
        ...obj?.houseType,
        [houseType]: isChecked
      }
    }));
  };

  return (
    <SelectLayout filterWith="House Type">
      {Object.entries(houseTypeList).map(([houseType, count]) => (
        <Label htmlFor={houseType} key={`${houseType}`}>
          <Checkbox
            type="checkbox"
            id={houseType}
            onChange={addFilterToList}
            checked={filterObject?.houseType[houseType]}
          />
          {houseType} ({count})
        </Label>
      ))}
    </SelectLayout>
  );
}

export default HouseTypeSelect;
