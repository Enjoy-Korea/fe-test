import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import { HouseInfo } from "../../types";
import * as S from "./style";

const ItemDetailPage = ({ houseInfo }: { houseInfo: HouseInfo[] }) => {
  const { id } = useParams<{ id: string | undefined }>();
  const house = houseInfo.find((item) => item.id === parseInt(id!));

  return (
    <S.Wrapper>
      <Header />
      <Nav />
      <S.InfoContainer>
        <S.ImgContainer>
          {house?.images.map((img) => (
            <img key={img.key} src={img.url} alt="house"></img>
          ))}
        </S.ImgContainer>
        <h2>{house?.name}</h2>
        <span>{house?.description}</span>
        <span>주소: {house?.address}</span>
        <S.TagContainer>
          <span>{house?.houseType}</span>
          <span>{house?.university}</span>
        </S.TagContainer>
      </S.InfoContainer>
    </S.Wrapper>
  );
};

export default ItemDetailPage;
