import styled from "styled-components"

export const FlexStyled = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  min-height: ${props => props.minHeight};
  width: ${props => props.width};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  background-color: ${props => props.bgColor};
  flex-grow: ${props => props.grow};
`
