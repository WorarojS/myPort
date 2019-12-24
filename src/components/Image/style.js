import styled from 'styled-components'

export const ImageStyle = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  position: ${props => props.position};
  top: ${props => props.top};
  right: ${props => props.right};
  left: ${props => props.left};
  z-index: ${props => props.index};
  color: ${props => props.color};
  transform: ${props => props.transform};
  margin: ${props => props.margin};
  max-width: 100%;
  max-height: 100%;
  opacity: ${props => props.opacity};
  filter: ${props => props.filter};
  transition-duration: 0.3s;
  :hover {
    filter: none;
  }
  @media only screen and (max-width: 768px) {
    &.bg-home {
      width: 100%;
      left: 0%;
    }
    &.job-img {
      display: none;
    }
    &.responsive-jd {
      margin: 5em 0 1em 0;
      width: 100%;
    }
  }
  @media only screen and (max-width: 450px) {
    &.bg-home {
      width: 100%;
      left: 0%;
    }
  }
`
