import React from "react"
import { SectionStyled } from "./styled"

const Section = props => {
  const {
    children,
    id,
    className,
    position,
    top,
    left,
    right,
    bottom,
    bg,
    minHeight,
    padding
  } = props
  return (
    <SectionStyled
      className={className}
      id={id}
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      bg={bg}
      minHeight={minHeight}
      padding={padding}
    >
      {children}
    </SectionStyled>
  )
}

Section.defaultsProps = {
  position: "relative",
  bg: "#F8F9F8"
}

export default Section
