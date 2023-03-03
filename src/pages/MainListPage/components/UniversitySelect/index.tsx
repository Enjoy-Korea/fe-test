import React from "react";
import styled from "styled-components";
import FilterSectionLayout from "../FilterSection";

// MEMO: CSS 추가 필요
const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 12px 14px;
  font-size: 14px;
  border-radius: 8px;

  /* active */
  border: 1px solid yellow;
  background-color: rgba(255, 255, 0, 0.3);
`;

const RadioBox = styled.input`
  /* visibility: hidden; */
`;

const universityTypeList = [
  { name: "울진대학교", count: 2 },
  { name: "외국대학교", count: 2 },
  { name: "서울대학교", count: 2 },
  { name: "용인대학교", count: 2 }
];

function UniversitySelect() {
  return (
    <FilterSectionLayout filterWith="University">
      {universityTypeList.map((university, index) => (
        <Label htmlFor={university.name} key={`${university.name}-${index}`}>
          <RadioBox type="radio" name="University" value={university.name} />
          {university.name} ({university.count})
        </Label>
      ))}
    </FilterSectionLayout>
  );
}

export default UniversitySelect;
