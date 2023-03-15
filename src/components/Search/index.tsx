import * as S from "./style";

import { useNavigate } from "react-router-dom";
import housesInfo from "../../data/houses.mock.json";
import { SearchProps } from "../../types";

const Search = ({
  handleSearch,
  searchValue,
  setSearchValue,
  keyPressHandler,
}: SearchProps) => {
  const navigate = useNavigate();

  const onSearchChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filteredHouses = housesInfo.filter((house) =>
      house.university.includes(searchValue)
    );
    handleSearch(filteredHouses);
    navigate(`/?university=${searchValue}`);
    setSearchValue("");
  };

  const onFocus = () => {
    setSearchValue("");
  };

  return (
    <S.Wrapper>
      <h2>FIND STAY</h2>
      <S.Form onSubmit={onSearchChange}>
        <input
          type="text"
          name="search"
          value={searchValue}
          placeholder="Search by university..."
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={onFocus}
          onKeyPress={keyPressHandler}
        ></input>
        <button>Search</button>
      </S.Form>
      <S.Bar></S.Bar>
    </S.Wrapper>
  );
};

export default Search;
