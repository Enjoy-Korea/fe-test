import React from "react";
import { useParams } from "react-router-dom";
import houseData from "../../data/houses.mock.json";
import styled from "styled-components";
import { SectionTitle } from "../../components/common/SectionTitle";
import { BackLink } from "../../components/common/BackLink";

export const ListItemDetailPage = () => {
  const { houseId } = useParams();
  const house = houseData.filter((house) => house.id === Number(houseId))[0];

  return (
    <ListItemDetailPageLayout>
      <DetailPageHeaderContainer>
        <BackLink pathTo="/" />
        <Title>{house.name}</Title>
      </DetailPageHeaderContainer>

      <Image src={house.images[0].url} />

      <SectionTitle title="설명" />
      <Description>{house.description}</Description>

      <SectionTitle title="위치" />
      <Address>{house.address}</Address>

      <SectionTitle title="대학" />
      <University>{house.university}</University>
    </ListItemDetailPageLayout>
  );
};

const ListItemDetailPageLayout = styled.div`
  width: 500px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 50px 0px;
`;

const DetailPageHeaderContainer = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Image = styled.img`
  width: 500px;
  object-fit: cover;
  margin: 50px 0px 20px 0px;

  border-radius: 10px;
`;

const Description = styled.span`
  width: 80%;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
`;

const Address = styled.span`
  width: 80%;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
`;

const University = styled.span`
  width: 80%;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
`;
