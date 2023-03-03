import React from "react";
import styled from "styled-components";

import HouseCard from "../../components/HouseCard";
import HouseTypeSelect from "./components/HouseTypeSelect";

const Layout = styled.div`
  display: flex;
  width: 100%;
`;

function MainListPage() {
  return (
    <Layout>
      <HouseTypeSelect />
      <HouseCard />
    </Layout>
  );
}

export default MainListPage;
