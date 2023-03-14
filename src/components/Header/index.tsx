import * as S from "./style";
import logo from "../../data/logo.png";
const Header = () => {
  return (
    <S.LogoContainer>
      <img src={logo} alt="logo" />
    </S.LogoContainer>
  );
};

export default Header;
