import React from 'react'
import PropTypes from 'prop-types'
import { ImageStyle } from './style'

const Image = props => {
  const {
    aos,
    aosDuration,
    className,
    source,
    height,
    width,
    position,
    top,
    right,
    left,
    index,
    color,
    margin,
    transform,
    opacity,
    filter
  } = props
  return (
    <ImageStyle
      data-aos={aos}
      data-aos-duration={aosDuration}
      className={className}
      src={source}
      width={width}
      height={height}
      position={position}
      top={top}
      right={right}
      left={left}
      index={index}
      margin={margin}
      color={color}
      transform={transform}
      opacity={opacity}
      filter={filter}
    />
  )
}
Image.propTypes = {
  aos: PropTypes.string,
  aosDuration: PropTypes.string,
  dataAos: PropTypes.string,
  dataAosDuration: PropTypes.string,
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  position: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  left: PropTypes.string,
  index: PropTypes.number,
  color: PropTypes.string,
  transform: PropTypes.string,
  margin: PropTypes.string,
  opacity: PropTypes.number,
  filter: PropTypes.string
}

Image.defaultProps = {
  aos: null,
  aosDuration: null,
  className: null,
  source: null,
  width: null,
  height: null,
  position: 'relative',
  margin: null,
  top: null,
  right: null,
  left: null,
  index: 1,
  color: null,
  transform: null,
  opacity: 1,
  filter: null
}
export default Image
