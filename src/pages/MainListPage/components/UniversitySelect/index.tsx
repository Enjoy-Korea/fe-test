import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import { filterState, universityFilterState } from "../../store";
import SelectLayout from "../SelectLayout";

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

const Checkbox = styled.input`
  /* visibility: hidden; */
`;

function UniversitySelect() {
  const [filterObject, setFilterObject] = useRecoilState(filterState);
  const universityFilter = useRecoilValue(universityFilterState);

  const addFilterToList = (e: React.ChangeEvent<HTMLInputElement>) => {
    const universityName = e.target.id;
    const isChecked = e.target.checked;

    setFilterObject((obj) => ({
      ...obj,
      university: {
        ...obj?.university,
        [universityName]: isChecked
      }
    }));
  };

  return (
    <SelectLayout filterWith="University">
      {Object.keys(universityFilter).map((university, index) => (
        <Label htmlFor={university} key={`${university}-${index}`}>
          <Checkbox
            type="checkbox"
            id={university}
            onChange={addFilterToList}
            checked={filterObject?.university[university]}
          />
          {university}
        </Label>
      ))}
    </SelectLayout>
  );
}

export default UniversitySelect;
