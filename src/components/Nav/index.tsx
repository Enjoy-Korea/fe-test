import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.LeftMenu>
        <span onClick={() => navigate("/")}>Find Stay</span>
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
