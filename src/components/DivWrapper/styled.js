import styled from "styled-components"

export const DivStyled = styled.div`
  position: ${props => props.position};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  float: ${props => props.float};
`
