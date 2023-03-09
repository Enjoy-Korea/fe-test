import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IItem } from "../../interfaces/itemInterface";
import { VerticalLine } from "../common/VerticalLine";

interface ItemProps {
  item: IItem;
}

export const Item = ({ item }: ItemProps) => {
  return (
    <ItemLayout>
      <ItemLink to={`house/${item.id}`}>
        <LeftSection>
          <ItemImage src={item.images[0].url} />
          <ItemTitle>{item.name}</ItemTitle>
        </LeftSection>
        <RightSection>
          <ItemDescription>{item.description}</ItemDescription>
          <HouseSubInfo>
            <ItemAddress>위치 : {item.address}</ItemAddress>
            <ItemUniversity>대학 : {item.university}</ItemUniversity>
            <ItemhouseType>주거 형태 : {item.houseType}</ItemhouseType>
          </HouseSubInfo>
        </RightSection>
      </ItemLink>
    </ItemLayout>
  );
};

const ItemLayout = styled.div`
  width: 100%;
  height: 250px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin: 20px 10px;

  &:hover {
    opacity: 0.7;
  }
`;

const ItemLink = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 10px;
`;

const ItemImage = styled.img`
  object-fit: cover;
  width: 80%;
  height: 80%;

  border-radius: 10px;
`;

const ItemTitle = styled.span`
  font-weight: 600;
  color: black;
  margin-top: 10px;
`;

const LeftSection = styled.div`
  width: 350px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightSection = styled.div`
  width: calc(100% - 350px);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  padding: 10px 0px 30px 0px;
`;

const ItemDescription = styled.p`
  font-size: 14px;

  color: rgba(0, 0, 0, 0.8);

  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  line-height: 1.5;
`;

const HouseSubInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ItemAddress = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 20px;
`;

const ItemUniversity = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
`;

const ItemhouseType = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
`;
