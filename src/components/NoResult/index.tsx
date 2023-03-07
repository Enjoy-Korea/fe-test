import React from "react"
import styled from "styled-components"

interface NoResultProps {
  buttonText?: string
  onButtonClick?: () => void
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NoResultHeader = styled.h2`
  margin-bottom: 0;
`

const NoResultInstruction = styled.p`
  color: gray;
`

const NoResultButton = styled.button`
  padding: 12px 16px;
  background-color: yellow;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`

function NoResult({ buttonText, onButtonClick }: NoResultProps) {
  return (
    <Container>
      <NoResultHeader>Sorry! No result found</NoResultHeader>
      <NoResultInstruction>
        Try adjusting or clearing your filters to display better results.
      </NoResultInstruction>
      {buttonText && onButtonClick && (
        <NoResultButton onClick={onButtonClick}>{buttonText}</NoResultButton>
      )}
    </Container>
  )
}

export default NoResult
