import React from "react";
import { Link, useParams } from "react-router-dom";

import styled from "styled-components";

import houseDatas from "../data/houses.mock.json";

function ListItemDetailPage() {
  const { id } = useParams();

  const itemDetailContent = houseDatas.find((data) => data.id === Number(id));

  return (
    <DetailContainer>
      <RightContainer>
        <HouseImage
          src={itemDetailContent.images[0].url}
          alt={itemDetailContent.name}
        />
      </RightContainer>
      <LeftContatiner>
        <Title>{itemDetailContent.name}</Title>
        <HouseType>타입 : {itemDetailContent.houseType}</HouseType>
        <University>대학교 : {itemDetailContent.university}</University>
        <Description>{itemDetailContent.description}</Description>
        <Address>주소 : {itemDetailContent.address}</Address>
        <Link to="/">
            <BackButton>뒤로가기</BackButton>
        </Link>
      </LeftContatiner>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  margin-top: 10rem;
  border: 1px solid black;
  border-radius: 10px;
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100%;
`;

const LeftContatiner = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`;

const HouseImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
`;

const Title = styled.div`
  margin: 1rem 0 3rem 1rem;
  font-size: 2rem;
  font-weight: 700;
`;

const HouseType = styled.div`
  margin: 0 0 3rem 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const University = styled.div`
  margin: 0 0 3rem 1rem;
  font-size: 1.3rem;
  font-weight: 500;
`;

const Description = styled.div`
  margin: 0 0 12rem 1rem;
  white-space: pre-wrap;
  line-height: 2rem;
`;

const Address = styled.div`
  margin: 0 0 0.5rem 1rem;
  color: #B4B4B4;
`;

const BackButton = styled.button`
  margin-left: 1rem;
  background-color: none;
  cursor: pointer;
`
export default ListItemDetailPage;
