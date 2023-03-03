import React from "react";
import styled from "styled-components";

import HouseCard from "../../components/HouseCard";
import HouseTypeSelect from "./components/HouseTypeSelect";
import UniversitySelect from "./components/UniversitySelect";

const Layout = styled.div`
  display: flex;
  width: 100%;
`;

const FilterSection = styled.aside`
  display: flex;
  flex-direction: column;
`;

const FilterHeader = styled.section`
  display: flex;
`;

const FilterTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #777;
  margin: 0;
`;

const ResetButton = styled.button`
  border: none;
  color: yellow;
  background-color: transparent;
  cursor: pointer;
`;

const HouseListWrapper = styled.div``;

const ListTitle = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #d3d3d3;
`;

function MainListPage() {
  return (
    <Layout>
      <FilterSection>
        <FilterHeader>
          <FilterTitle>Filters</FilterTitle>
          <ResetButton>Reset Filter</ResetButton>
        </FilterHeader>
        <UniversitySelect />
        <HouseTypeSelect />
      </FilterSection>
      <HouseListWrapper>
        <ListTitle>Available Houses</ListTitle>
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </HouseListWrapper>
    </Layout>
  );
}

export default MainListPage;
