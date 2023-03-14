import Header from "../Header";
import Nav from "../Nav";
import Search from "../Search";
import * as S from "./style";

const MainList = () => {
  return (
    <S.Wrapper>
      <Header />
      <Nav />
      <Search />
    </S.Wrapper>
  );
};

export default MainList;
