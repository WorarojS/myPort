import styled from "styled-components"

export const SectionStyled = styled.section`
  position: ${props => props.position};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  background-color: ${props => props.bgColor};
`
