import * as S from "./style";

const Nav = () => {
  return (
    <S.Wrapper>
      <S.LeftMenu>
        <span>Find Stay</span>
      </S.LeftMenu>
      <S.RightMenu>
        <li>Activity</li>
        <li>SIM</li>
        <li>Blog</li>
      </S.RightMenu>
    </S.Wrapper>
  );
};

export default Nav;
