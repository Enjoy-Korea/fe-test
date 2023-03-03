import React from "react";
import styled from "styled-components";
import FilterSectionLayout from "../FilterSection";

// MEMO: CSS 추가 필요
const Label = styled.label`
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const Checkbox = styled.input``;

const houseTypeList = [
  { type: "펜션", count: 2 },
  { type: "단독주택", count: 1 },
  { type: "아파트", count: 2 }
];

function HouseTypeSelect() {
  // fetch flat, studio, hotel array

  return (
    <FilterSectionLayout filterWith="House Type">
      {houseTypeList.map((houseType, index) => (
        <Label htmlFor={houseType.type} key={`${houseType}-${index}`}>
          <Checkbox type="checkbox" id={houseType.type} />
          {houseType.type} ({houseType.count})
        </Label>
      ))}
    </FilterSectionLayout>
  );
}

export default HouseTypeSelect;
