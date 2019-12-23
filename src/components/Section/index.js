import React from "react"
import { SectionStyled } from "./styled"

const Section = props => {
  const { children, position, top, left, right, bottom, bg, minHeight } = props
  return (
    <SectionStyled
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      bg={bg}
      minHeight={minHeight}
    >
      {children}
    </SectionStyled>
  )
}

Section.defaultsProps = {
  position: "relative"
}

export default Section
