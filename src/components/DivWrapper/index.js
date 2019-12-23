import React from "react"
import { DivStyled } from "./styled"

const DivWrapper = props => {
  const { children, margin, float } = props
  return (
    <DivStyled margin={margin} float={float}>
      {children}
    </DivStyled>
  )
}

DivWrapper.defaultProps = {
  margin: null,
  float: null
}

export default DivWrapper
