import React from "react"
import { useRouteMatch } from "react-router-dom"
import styled from "styled-components"

import SubContent from "./components/SubContent"
import useHouseDetailFetch from "./hooks/useHouseDetailFetch"

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 0 48px;
`

const ImageWrapper = styled.div`
  width: 200px;
  height: 150px;
`

const TempImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const HouseTitle = styled.h1`
  margin: 0;
  padding: 18px 0;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid gray;
`

const HouseDescription = styled.div`
  padding: 24px 0 36px;
  white-space: pre-wrap;
`

// TODO: media query 적용
function HouseDetailPage() {
  const {
    params: { id }
  } = useRouteMatch<{ id: string }>()

  const { data, isLoading } = useHouseDetailFetch(Number(id))

  return (
    <PageContainer>
      {isLoading && <div>loading...</div>}
      <CarouselContainer>
        {data?.images.map((image) => (
          <ImageWrapper key={image.key}>
            <TempImage src={image.url} />
          </ImageWrapper>
        ))}
      </CarouselContainer>
      <ContentContainer>
        <HouseTitle>{data?.name}</HouseTitle>
        <HouseDescription>{data?.description}</HouseDescription>
        <SubContent title="University">{data?.university}</SubContent>
        <SubContent title="houseType">{data?.houseType}</SubContent>
        <SubContent title="Address">{data?.address}</SubContent>
      </ContentContainer>
    </PageContainer>
  )
}

export default HouseDetailPage
