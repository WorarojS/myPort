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
`
export const TextH2Style = styled.h2`
  margin: ${props => props.margin};
  font-size: 2.8em;
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  color: ${props => props.fontcolor};
  letter-spacing: ${props => props.space};
  line-height: ${props => props.lineHeight};
  :hover {
    color: ${props => props.hovercolor};
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
  :hover {
    color: ${props => props.hovercolor};
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
  :hover {
    color: ${props => props.hovercolor};
  }
`
export const TextH5Style = styled.h5`
  margin: ${props => props.margin};
  font-size: 1.3em;
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  color: ${props => props.fontcolor};
  letter-spacing: ${props => props.space};
  line-height: ${props => props.lineHeight};
  transition-duration: 0.3s;
  :hover {
    color: ${props => props.hovercolor};
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
  :hover {
    color: ${props => props.hovercolor};
  }
`

export const TextCustomStyle = styled.h6`
  font-size: ${props => props.fontSize};
  text-align: ${props => props.align};
  font-weight: ${props => props.weight};
  color: ${props => props.fontcolor};
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
