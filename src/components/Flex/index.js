import React from "react"
import { FlexStyled } from "./styled"

const Flex = props => {
  const {
    children,
    className,
    aos,
    aosDuration,
    flexDirection,
    justifyContent,
    alignItems,
    alignSelf,
    height,
    minHeight,
    margin,
    padding,
    bgColor,
    width,
    grow,
    wrap
  } = props
  return (
    <FlexStyled
      data-aos={aos}
      data-aos-duration={aosDuration}
      className={className}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignSelf={alignSelf}
      height={height}
      minHeight={minHeight}
      margin={margin}
      padding={padding}
      bgColor={bgColor}
      width={width}
      grow={grow}
      wrap={wrap}
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
