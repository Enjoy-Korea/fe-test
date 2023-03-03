import React from "react";
import styled from "styled-components";
import Tag from "../Tag";

// interface HouseCardProps {}

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 200px;
  padding: 24px 0;
  border-bottom: 1px solid gray;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 200px;
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

export default function HouseCard() {
  return (
    <CardContainer>
      <ImageWrapper>
        <TempImage src="http://si.wsj.net/public/resources/images/OB-YO176_hodcol_H_20130815124744.jpg" />
      </ImageWrapper>
      <ContentWrapper>
        <HouseType>Enkorplex</HouseType>
        <HouseName>Enkor Plex</HouseName>
        <Tag type="info" text="university" />
        <Address>address address address address address</Address>
      </ContentWrapper>
    </CardContainer>
  );
}
