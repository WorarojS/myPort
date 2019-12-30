import styled from "styled-components"

export const DivStyled = styled.div`
  position: ${props => props.position};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  float: ${props => props.float};

  &.headline {
    height: 50px;
    width: 1px;
    margin: 0 0 1em 0;
    border: 0.5px solid rgb(125, 125, 125, 0.5);
  }
  &.headline2 {
    height: 50px;
    width: 0px;
    margin: 0 0 1em 0;
    border: 1px dashed rgb(125, 125, 125, 0.5);
  }
  &.headline3 {
    height: 1px;
    width: 5em;
    margin: 0 0 0.5em 0;
    border: 0.5px solid rgb(125, 125, 125, 0.5);
  }
  &.headline4 {
    height: 1px;
    width: 5em;
    margin: 0 0 0.5em 0;
    border: 0.5px dashed rgb(125, 125, 125, 0.5);
  }
`
