import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

import { filterState, universityFilterState } from "../../store";
import SelectLayout from "../SelectLayout";

const Label = styled.label<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  margin: 6px 0;
  padding: 12px 14px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid ${({ isChecked }) => (isChecked ? "yellow" : "gray")};
  background-color: ${({ isChecked }) => (isChecked ? "rgba(255, 255, 0, 0.3)" : "transparent")};
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
        <Label
          htmlFor={university}
          key={`${university}-${index}`}
          isChecked={filterObject?.university[university]}
        >
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
