import styled from "styled-components"

export const DivStyled = styled.div`
  position: ${props => props.position};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  float: ${props => props.float};
  &.headline {
    height: 50px;
    margin: 0 0 1em 0;
    border: 0.5px solid rgb(125, 125, 125, 0.5);
  }
`
