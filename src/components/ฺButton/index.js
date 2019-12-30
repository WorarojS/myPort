import React from "react"
import { ButtonStyled } from "./styled"

const Button = props => {
  const {
    children,
    aos,
    aosDuration,
    margin,
    padding,
    bgColor,
    fontcolor,
    border,
    display,
    hoverBgColor,
    hoverFontcolor,
    hoverborder,
    fontSize,
    onClick
  } = props
  return (
    <ButtonStyled
      data-aos={aos}
      data-aos-duration={aosDuration}
      margin={margin}
      padding={padding}
      bgColor={bgColor}
      fontcolor={fontcolor}
      border={border}
      display={display}
      hoverBgColor={hoverBgColor}
      hoverFontcolor={hoverFontcolor}
      hoverborder={hoverborder}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  )
}
Button.defaultProps = {
  fontSize: "1em"
}
export default Button
