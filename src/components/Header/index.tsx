import * as S from "./style";
import logo from "../../data/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.LogoContainer>
      <img src={logo} alt="logo" onClick={() => navigate("/")} />
    </S.LogoContainer>
  );
};

export default Header;
