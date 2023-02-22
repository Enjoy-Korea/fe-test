import React, { useState } from "react";
import styled from "styled-components";

import HouseDatas from "../data/houses.mock.json";
import House from "./House";

function MainListPage() {
  const [data, setData] = useState(HouseDatas);
  const options = ["none", "university", "houseType"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const sortHousesData = (option) => {
    if (option === "none") {
      return setData(HouseDatas);
    }

    const sortedData = [...HouseDatas].sort((a, b) => {
      if (a[option] > b[option]) return 1;
      if (a[option] < b[option]) return -1;
      return 0;
    });

    setData(sortedData);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    sortHousesData(event.target.value);
  };

  return (
    <MainContainer>
      <SelectBox value={selectedOption} onChange={handleChange}>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          );
        })}
      </SelectBox>
      {data.map((houseData) => {
        return <House item={houseData} key={houseData.id} />;
      })}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SelectBox = styled.select`
  width: 10vw;
  height: 5vh;
  margin-bottom: 1rem;
  border-radius: 10px;
  color: #b4b4b4;
  font-weight: 600;
`;
export default MainListPage;
