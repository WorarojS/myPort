import styled from "styled-components"
import * as Scroll from "react-scroll"
const LinkStyle = Scroll.Link

export const TextH1Style = styled.h1`
  margin: ${props => props.margin};
  font-size: 3.5em;
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  color: ${props => props.fontcolor};
  letter-spacing: ${props => props.space};
  line-height: ${props => props.lineHeight};
  transition-duration: 0.3s;
  :hover {
    color: ${props => props.hovercolor};
  }
  @media only screen and (max-width: 768px) {
    font-size: 2.5em;
  }
`
export const TextH2Style = styled.h2`
  margin: ${props => props.margin};
  font-size: 2.8em;
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  color: ${props => props.fontcolor};
  letter-spacing: ${props => props.space};
  line-height: ${props => props.lineHeight};
  &.font1 {
    font-family: "Cinzel", serif;
  }
  :hover {
    color: ${props => props.hovercolor};
  }
  
  @media only screen and (max-width: 768px) {
    font-size: 1.8em;
  }
`
export const TextH3Style = styled.h3`
  margin: ${props => props.margin};
  font-size: 2.5em;
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  color: ${props => props.fontcolor};
  letter-spacing: ${props => props.space};
  line-height: ${props => props.lineHeight};
  &.font1 {
    font-family: "Cinzel", serif;
  }
  :hover {
    color: ${props => props.hovercolor};
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`
export const TextH4Style = styled.h4`
  margin: ${props => props.margin};
  font-size: 1.6em;
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  color: ${props => props.fontcolor};
  letter-spacing: ${props => props.space};
  line-height: ${props => props.lineHeight};
  &.font1 {
    font-family: "Cinzel", serif;
  }
  :hover {
    color: ${props => props.hovercolor};
  }
  @media only screen and (max-width: 768px) {
    font-size: 1em;
    &.home-position {
      font-size: 0.8em;
    }
  }
`
export const TextH5Style = styled.h5`
  margin: ${props => props.margin};
  font-size: 1em;
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  color: ${props => props.fontcolor};
  letter-spacing: ${props => props.space};
  line-height: ${props => props.lineHeight};
  transition-duration: 0.3s;
  &.font2 {
    font-family: "avenir", serif;
  }
  :hover {
    color: ${props => props.hovercolor};
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.8em;
  }
`
export const TextH6Style = styled.h6`
  margin: ${props => props.margin};
  font-size: 0.9em;
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  color: ${props => props.fontcolor};
  letter-spacing: ${props => props.space};
  line-height: ${props => props.lineHeight};
  transition-duration: 0.3s;
  &.font2 {
    font-family: "avenir", serif;
  }
  :hover {
    color: ${props => props.hovercolor};
  }
  @media only screen and (max-width: 768px) {
    font-size: 0.6em;
  }
`

export const TextCustomStyle = styled.h6`
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize};
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  color: ${props => props.fontcolor};
  letter-spacing: ${props => props.space};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  line-height: ${props => props.lineHeight};
  &.font1 {
    font-family: "Cinzel", serif;
  }
  :hover {
    color: ${props => props.hovercolor};
  }
`

export const LinkAnchor = styled(LinkStyle)`
  text-decoration: none !important;
  font-size: ${props => props.fontSize}em;
  color: ${props => props.fontcolor};
  cursor: pointer;
  :hover {
    color: ${props => props.hovercolor};
  }
`
