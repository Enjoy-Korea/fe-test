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

  const handleSearch = (filteredHouses: HouseInfo[]) => {
    setFiltered(filteredHouses);
  };
  console.log(filtered);

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const university = params.get("university");
    if (university) {
      setSearchValue(university);
      const filteredHouses = housesInfo.filter((house) =>
        house.university.includes(university)
      );
      setFiltered(filteredHouses);
    } else {
      setFiltered(housesInfo);
    }
  }, [location.search]);

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
        <Filter />
        <MainList filteredHouses={filtered} />
      </S.Main>
    </S.Wrapper>
  );
};

export default MainListPage;
