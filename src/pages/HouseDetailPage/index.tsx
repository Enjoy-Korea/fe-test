import React from "react";
import styled from "styled-components";

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

const SubContentWrapper = styled.div`
  padding: 18px 0;
  border-bottom: 1px solid gray;

  /* TODO: 마지막 요소 border bottom 제거 */
`;

const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #777;
  margin: 0;
  margin-bottom: 8px;
`;

const SubContent = styled.div``;

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

function HouseDetailPage() {
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
        {/* TODO: SubContent 컵포넌트 분리 */}
        <SubContentWrapper>
          <SubTitle>University</SubTitle>
          <SubContent>울진대학교</SubContent>
        </SubContentWrapper>
        <SubContentWrapper>
          <SubTitle>houseType</SubTitle>
          <SubContent>펜션</SubContent>
        </SubContentWrapper>
        <SubContentWrapper>
          <SubTitle>Address</SubTitle>
          <SubContent>경상북도 울진군 근남면 세포2길 1-21</SubContent>
        </SubContentWrapper>
      </ContentContainer>
    </PageContainer>
  );
}

export default HouseDetailPage;
