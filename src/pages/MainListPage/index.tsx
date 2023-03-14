import Filter from "../../components/Filter";
import Header from "../../components/Header";
import MainList from "../../components/MainList";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import * as S from "./style";

const MainListPage = () => {
  return (
    <S.Wrapper>
      <Header />
      <Nav />
      <Search />
      <S.Main>
        <Filter />
        <MainList />
      </S.Main>
    </S.Wrapper>
  );
};

export default MainListPage;
