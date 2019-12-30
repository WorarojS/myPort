import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const DivWrapper = styled.div`
  &.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50px;
  }
  &.line {
    width: 2px;
    height: 15em;
    border: 1px solid rgb(255, 255, 255, 0.5);
    margin: 0 0 1em 0;
  }
`

export const Link = styled.a`
  display: block;
  color: ${props => props.fontcolor};
  text-decoration: none;
  margin: 1em 0;
  cursor: pointer;
  :hover {
    color: black;
  }
  :link {
    text-decoration: none;
    color: ${props => props.fontcolor};
  }
`

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  transition-duration: 0.3s;
  color: white;
  &.social {
    :hover {
      color: black;
    }
  }
`
