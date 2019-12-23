import styled from "styled-components"
import * as Scroll from "react-scroll"
const LinkStyle = Scroll.Link

export const Head = styled.h6`
  font-size: 0.7em;
  letter-spacing: 0.7em;
  margin: 0;
  font-weight: 300;
  cursor: pointer;
  opacity: 0.8;
  transition-duration: 0.3s;
  color: black;
  :hover {
    opacity: 1;
    font-weight: 600;
    color: white;
  }
`

export const Nav = styled(LinkStyle)`
  color: black !important;
  text-decoration: none !important;
  font-size: 0.8em;
  letter-spacing: 0.3em;
  font-weight: 300;
  cursor: pointer;
  margin: 0 2em;
  opacity: 0.5;
  transition-duration: 0.3s;

  :hover {
    opacity: 1;
    font-weight: 600;
    color: white !important;
  }
`
