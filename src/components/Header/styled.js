import styled from "styled-components"
import * as Scroll from "react-scroll"
const LinkStyle = Scroll.Link

export const Nav = styled(LinkStyle)`
  color: black !important;
  text-decoration: none !important;
  font-size: 0.8em;
  letter-spacing: 0.3em;
  font-weight: 300;
  cursor: pointer;
  margin: 0 2em;

  transition-duration: 0.3s;

  :hover {
    font-weight: 600;
    color: white !important;
  }
`
