import styled from "styled-components"
import * as Scroll from "react-scroll"
const LinkStyle = Scroll.Link

export const Head = styled.h6`
  font-size: 0.5em;
  letter-spacing: 0.7em;
  margin: 0;
  font-weight: 300;
  cursor: pointer;
`

export const Nav = styled(LinkStyle)`
  text-decoration: none !important;
  font-size: 0.8em;
  letter-spacing: 0.3em;
  font-weight: 300;
  cursor: pointer;
  margin: 0 2em;
`
