import React from "react";
import styled from "styled-components";
import SubContent from "./components/SubContent";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 0 48px;
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 150px;
`;

const TempImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HouseTitle = styled.h1`
  margin: 0;
  padding: 18px 0;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid gray;
`;

const HouseDescription = styled.div`
  padding: 24px 0 36px;
`;

const images = [
  {
    url: "http://si.wsj.net/public/resources/images/OB-YO176_hodcol_H_20130815124744.jpg",
    key: 1
  },
  {
    url: "https://image.pensionlife.co.kr/penimg/pen_1/pen_19/1977/9734f7418fcc01a2321ba800b1f2c7ee.jpg",
    key: 2
  }
];

// TODO: media query 적용
function HouseDetailPage() {
  // TODO: detail data fetching

  return (
    <PageContainer>
      <CarouselContainer>
        {images.map((image) => (
          <ImageWrapper key={image.key}>
            <TempImage src={image.url} />
          </ImageWrapper>
        ))}
      </CarouselContainer>
      <ContentContainer>
        <HouseTitle>Co-op City Hotel Oryu-dong</HouseTitle>
        <HouseDescription>
          you can refill other shampoo and body wash. all rooms are the same size, and there are two
          single or one double bed. (Please note that the room assignment is random.) - Location: It
          is located within a 2-minute walk of Oryu-dong Station Line 1. - Nearby university :
          Hanyang Univ., Korea Univ., HUFS, Konkuk Univ.
        </HouseDescription>
        <SubContent title="University">
          <div>image</div>
          울진대학교
        </SubContent>
        <SubContent title="houseType">펜션</SubContent>
        <SubContent title="Address">경상북도 울진군 근남면 세포2길 1-21</SubContent>
      </ContentContainer>
    </PageContainer>
  );
}

export default HouseDetailPage;
