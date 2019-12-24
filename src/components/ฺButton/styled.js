import styled from "styled-components"

export const ButtonStyled = styled.button`
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  background: ${props => props.bgColor};
  color: ${props => props.fontcolor};
  border-radius: ${props => props.radius};
  border: ${props => props.border};
  border-radius: 3px;
  display: ${props => props.display};
  overflow: hidden;
  white-space: nowrap;
  transition-duration: 0.3s;
  cursor: pointer;
  font-size: ${props => props.fontSize};
  :hover {
    background: ${props => props.hoverBgColor};
    color: ${props => props.hoverFontcolor};
    border: ${props => props.hoverborder};
  }
`
