import styled from "styled-components"

export const FlexStyled = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-self: ${props => props.alignSelf};
  height: ${props => props.height};
  min-height: ${props => props.minHeight};
  width: ${props => props.width};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  background-color: ${props => props.bgColor};
  background-image: url(${props => props.bgImage});
  flex-grow: ${props => props.grow};
  flex-wrap: ${props => props.wrap};
  overflow: ${props => props.overflow};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  @media only screen and (max-width: 992px) {
    &.responsive-flex-home {
      width: 100%;
      justify-content: center;
    }
    &.responsive-flex {
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    &.responsive-wrap-flex {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    &.home-hide {
      display: none;
    }
  }
`
