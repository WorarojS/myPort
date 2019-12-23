import React from "react"
import { FlexStyled } from "./styled"

const Flex = props => {
  const {
    children,
    flexDirection,
    justifyContent,
    alignItems,
    height,
    minHeight,
    margin,
    padding,
    bgColor,
    width,
    grow
  } = props
  return (
    <FlexStyled
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      height={height}
      minHeight={minHeight}
      margin={margin}
      padding={padding}
      bgColor={bgColor}
      width={width}
      grow={grow}
    >
      {children}
    </FlexStyled>
  )
}

Flex.defaultProps = {
  justifyContent: "center",
  alignItems: "center"
}

export default Flex
