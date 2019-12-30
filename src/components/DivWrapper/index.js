import React from "react"
import { DivStyled } from "./styled"

const DivWrapper = props => {
  const {
    children,

    aos,
    aosDuration,
    className,
    margin,
    float,
    width,
    height,
    position
  } = props
  return (
    <DivStyled
      data-aos={aos}
      data-aos-duration={aosDuration}
      className={className}
      position={position}
      margin={margin}
      width={width}
      height={height}
      float={float}
    >
      {children}
    </DivStyled>
  )
}

DivWrapper.defaultProps = {
  margin: null,
  float: null
}

export default DivWrapper
