import styled from "styled-components"

export const SectionStyled = styled.section`
  position: ${props => props.position};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  background: ${props => props.bg};
  padding: ${props => props.padding};
  overflow: hidden;
  &.home {
    background: linear-gradient(to right, #f09819, #edde5d, #debecc, #faaca8);
    background-size: 400% 400%;
    animation: gradientBG 20s ease infinite;

    @keyframes gradientBG {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`
