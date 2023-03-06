import React from "react";
import styled from "styled-components";
import { useRecoilValue, useResetRecoilState } from "recoil";

import HouseCard from "../../components/HouseCard";
import HouseTypeSelect from "./components/HouseTypeSelect";
import UniversitySelect from "./components/UniversitySelect";
import { filterdHouseListState, filterState } from "./store";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const FilterSection = styled.aside`
  display: flex;
  flex-direction: column;
  width: 260px;
  padding: 0 20px 0 10px;
`;

const FilterHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const FilterTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #777;
  margin: 0;
`;

const ResetButton = styled.button`
  border: none;
  color: rgb(207, 207, 37);
  background-color: transparent;
  cursor: pointer;
`;

const HouseListWrapper = styled.div`
  min-width: 480px;
`;

const ListTitle = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #d3d3d3;
`;

function MainListPage() {
  const houseList = useRecoilValue(filterdHouseListState);
  const resetFilterObject = useResetRecoilState(filterState);

  const handleFilterReset = () => {
    resetFilterObject();
  };

  return (
    <Layout>
      <FilterSection>
        <FilterHeader>
          <FilterTitle>Filters</FilterTitle>
          <ResetButton onClick={handleFilterReset}>Reset Filter</ResetButton>
        </FilterHeader>
        <UniversitySelect />
        <HouseTypeSelect />
      </FilterSection>
      <HouseListWrapper>
        <ListTitle>Available Houses</ListTitle>
        {houseList.map((house) => (
          <HouseCard
            key={house.id}
            houseId={house.id}
            img={house.images[0].url}
            houseType={house.houseType}
            houseName={house.name}
            university={house.university}
            address={house.address}
          />
        ))}
      </HouseListWrapper>
    </Layout>
  );
}

export default MainListPage;
