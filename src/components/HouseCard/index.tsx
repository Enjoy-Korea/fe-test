import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Tag from "../Tag";

interface HouseCardProps {
  houseId: number;
  img: string;
  houseType: string;
  houseName: string;
  university: string;
  address: string;
}

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: black;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 200px;
  padding: 24px 0;
  border-bottom: 1px solid gray;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 200px;
  min-width: 200px;
  height: 150px;
  /* ratio 추가 */
  margin-right: 12px;
  border-radius: 12px;
  overflow: hidden;
`;

const TempImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 270px;
`;

const HouseType = styled.span`
  font-size: 14px;
  color: gray;
`;

const HouseName = styled.h4`
  margin: 10px 0 20px;
  font-size: 18px;
  font-weight: 600;
`;

const Address = styled.span`
  font-size: 14px;
  color: gray;
`;

export default function HouseCard({
  houseId,
  img,
  houseType,
  houseName,
  university,
  address
}: HouseCardProps) {
  return (
    <StyledLink to={`/houses/${houseId}`}>
      <CardContainer>
        <ImageWrapper>
          <TempImage src={img} />
        </ImageWrapper>
        <ContentWrapper>
          <HouseType>{houseType}</HouseType>
          <HouseName>{houseName}</HouseName>
          <Tag type="info" text={university} />
          <Address>{address}</Address>
        </ContentWrapper>
      </CardContainer>
    </StyledLink>
  );
}
