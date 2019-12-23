import React from "react"
import { ButtonStyled } from "./styled"

const Button = props => {
  const {
    children,
    margin,
    padding,
    bgColor,
    fontcolor,
    border,
    display,
    hoverBgColor,
    hoverFontcolor,
    hoverborder
  } = props
  return (
    <ButtonStyled
      margin={margin}
      padding={padding}
      bgColor={bgColor}
      fontcolor={fontcolor}
      border={border}
      display={display}
      hoverBgColor={hoverBgColor}
      hoverFontcolor={hoverFontcolor}
      hoverborder={hoverborder}
    >
      {children}
    </ButtonStyled>
  )
}
Button.defaultProps = {}
export default Button
