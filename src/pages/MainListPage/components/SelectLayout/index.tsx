import React, { PropsWithChildren, ReactNode } from "react"
import styled from "styled-components"

interface FilterSectionProps {
  filterWith: string
  children?: ReactNode
}

const Content = styled.section`
  width: 100%;
`

const SectionName = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #777;
`

function SelectLayout({ filterWith, children }: PropsWithChildren<FilterSectionProps>) {
  return (
    <Content>
      <SectionName>{filterWith}</SectionName>
      {children}
    </Content>
  )
}

export default SelectLayout
