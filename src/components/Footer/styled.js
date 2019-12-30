import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  color: white;
  transition-duration: 0.3s;
  :hover {
    color: #f09819;
  }
`
export const Link = styled.a`
  display: block;

  color: ${props => props.fontcolor};
  text-decoration: none;
  text-align: right;
  margin: 1em 0 0 1em;
  cursor: pointer;
  transition-duration: 0.3s;
  :link {
    text-decoration: none;
    color: ${props => props.fontcolor};
  }
  :hover {
    color: #f09819;
  }
  &.social {
    margin: 0 0 0 50px;
  }
`
