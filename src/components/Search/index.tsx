import * as S from "./style";

const Search = () => {
  return (
    <S.Wrapper>
      <h2>FIND STAY</h2>
      <S.Form>
        <input
          type="text"
          name="search"
          placeholder="Search by university..."
        ></input>
        <button>Search</button>
      </S.Form>
      <S.Bar></S.Bar>
    </S.Wrapper>
  );
};

export default Search;
