import React from "react";
import styled from "styled-components";

import HouseCard from "../../components/HouseCard";
import HouseTypeSelect from "./components/HouseTypeSelect";
import UniversitySelect from "./components/UniversitySelect";

const Layout = styled.div`
  display: flex;
  width: 100%;
`;

const FilterSection = styled.section`
  display: flex;
  flex-direction: column;
`;

function MainListPage() {
  return (
    <Layout>
      <FilterSection>
        <UniversitySelect />
        <HouseTypeSelect />
      </FilterSection>
      <HouseCard />
    </Layout>
  );
}

export default MainListPage;
