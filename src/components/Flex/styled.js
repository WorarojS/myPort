import styled from "styled-components"

export const FlexStyled = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  height: ${props => props.height};
  min-height: ${props => props.minHeight};
  width: ${props => props.width};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  background-color: ${props => props.bgColor};
  flex-grow: ${props => props.grow};
  @media only screen and (max-width: 992px) {
    &.responsive-flex {
      width: 90%;
    }
    &.home-hide {
      display: none;
    }
  }
`
