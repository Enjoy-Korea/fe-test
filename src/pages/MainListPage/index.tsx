import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Filter from "../../components/Filter";
import Header from "../../components/Header";
import MainList from "../../components/MainList";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import { HouseInfo } from "../../types";
import * as S from "./style";
import housesInfo from "../../data/houses.mock.json";

const MainListPage = () => {
  const location = useLocation();
  const [filtered, setFiltered] = useState<HouseInfo[]>(housesInfo);
  const [searchValue, setSearchValue] = useState("");
  const [selectedHouseType, setSelectedHouseType] = useState("");

  const handleSearch = (filteredHouses: HouseInfo[]) => {
    setSelectedHouseType(selectedHouseType);
    setFiltered(filteredHouses);
  };
  console.log(filtered);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const university = params.get("university");
    if (university) {
      setSearchValue(university);
      const filteredHouses = housesInfo.filter(
        (house) =>
          house.university.includes(university) &&
          (selectedHouseType === "" || house.houseType === selectedHouseType)
      );
      setFiltered(filteredHouses);
    } else {
      setFiltered(housesInfo);
    }
  }, [location.search, selectedHouseType]);

  const handleHouseTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedType = event.target.value;
    setSelectedHouseType(selectedType);
    const encodedType = encodeURIComponent(selectedType);
    window.history.replaceState(
      {},
      "",
      `?university=${searchValue}&houseType=${encodedType}`
    );
    const filteredHouses = housesInfo.filter(
      (house) =>
        house.university.includes(searchValue) &&
        house.houseType === selectedType
    );
    setFiltered(filteredHouses);
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchValue("");
      const encodedValue = encodeURIComponent(searchValue);
      window.location.href = `/?university=${encodedValue}`;
    }
  };

  return (
    <S.Wrapper>
      <Header />
      <Nav />
      <Search
        handleSearch={handleSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        keyPressHandler={keyPressHandler}
      />
      <S.Main>
        <Filter
          houseInfo={housesInfo}
          selectedHouseType={selectedHouseType}
          handleHouseTypeChange={handleHouseTypeChange}
        />
        <MainList filteredHouses={filtered} />
      </S.Main>
    </S.Wrapper>
  );
};

export default MainListPage;
