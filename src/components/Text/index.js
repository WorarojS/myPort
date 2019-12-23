import React from "react"
import {
  TextH1Style,
  TextH2Style,
  TextH3Style,
  TextH4Style,
  TextH5Style,
  TextH6Style,
  TextCustomStyle,
  LinkAnchor
} from "./styled"

const H1Style = props => {
  const {
    className,
    id,
    aos,
    aosDuration,
    margin,
    fontcolor,
    weight,
    align,
    children,
    space,
    lineHeight,
    hovercolor
  } = props
  return (
    <TextH1Style
      data-aos={aos}
      data-aos-duration={aosDuration}
      className={className}
      id={id}
      margin={margin}
      fontcolor={fontcolor}
      weight={weight}
      align={align}
      children={children}
      space={space}
      lineHeight={lineHeight}
      hovercolor={hovercolor}
    >
      {children}
    </TextH1Style>
  )
}

const H2Style = props => {
  const {
    className,
    id,
    aos,
    aosDuration,
    margin,
    fontcolor,
    weight,
    align,
    children,
    space,
    lineHeight,
    hovercolor
  } = props
  return (
    <TextH2Style
      data-aos={aos}
      data-aos-duration={aosDuration}
      className={className}
      id={id}
      margin={margin}
      fontcolor={fontcolor}
      weight={weight}
      align={align}
      children={children}
      space={space}
      lineHeight={lineHeight}
      hovercolor={hovercolor}
    >
      {children}
    </TextH2Style>
  )
}

const H3Style = props => {
  const {
    className,
    id,
    aos,
    aosDuration,
    margin,
    fontcolor,
    weight,
    align,
    children,
    hovercolor,
    space,
    lineHeight
  } = props
  return (
    <TextH3Style
      data-aos={aos}
      data-aos-duration={aosDuration}
      className={className}
      id={id}
      margin={margin}
      fontcolor={fontcolor}
      weight={weight}
      align={align}
      hovercolor={hovercolor}
      space={space}
      lineHeight={lineHeight}
    >
      {children}
    </TextH3Style>
  )
}

const H4Style = props => {
  const {
    className,
    id,
    aos,
    aosDuration,
    margin,
    fontcolor,
    weight,
    align,
    children,
    hovercolor,
    space,
    lineHeight
  } = props
  return (
    <TextH4Style
      data-aos={aos}
      data-aos-duration={aosDuration}
      className={className}
      id={id}
      margin={margin}
      fontcolor={fontcolor}
      weight={weight}
      align={align}
      hovercolor={hovercolor}
      space={space}
      lineHeight={lineHeight}
    >
      {children}
    </TextH4Style>
  )
}

const H5Style = props => {
  const {
    className,
    id,
    aos,
    aosDuration,
    margin,
    fontcolor,
    weight,
    align,
    children,
    hovercolor,
    space,
    lineHeight
  } = props
  return (
    <TextH5Style
      data-aos={aos}
      data-aos-duration={aosDuration}
      className={className}
      id={id}
      margin={margin}
      fontcolor={fontcolor}
      weight={weight}
      align={align}
      hovercolor={hovercolor}
      space={space}
      lineHeight={lineHeight}
    >
      {children}
    </TextH5Style>
  )
}

const H6Style = props => {
  const {
    className,
    id,
    aos,
    aosDuration,
    margin,
    fontcolor,
    weight,
    align,
    children,
    hovercolor,
    space,
    lineHeight
  } = props
  return (
    <TextH6Style
      data-aos={aos}
      data-aos-duration={aosDuration}
      className={className}
      id={id}
      margin={margin}
      fontcolor={fontcolor}
      weight={weight}
      align={align}
      hovercolor={hovercolor}
      space={space}
      lineHeight={lineHeight}
    >
      {children}
    </TextH6Style>
  )
}

const CustomStyle = props => {
  const { className, fontcolor, fontSize, weight, align, children } = props
  return (
    <TextCustomStyle
      className={className}
      fontcolor={fontcolor}
      fontSize={fontSize}
      weight={weight}
      align={align}
    >
      {children}
    </TextCustomStyle>
  )
}

const Link = props => {
  const {
    children,
    onClick,
    to,
    fontSize,
    fontcolor,
    hovercolor,
    weight
  } = props
  return (
    <LinkAnchor
      to={to}
      onClick={onClick}
      fontSize={fontSize}
      fontcolor={fontcolor}
      hovercolor={hovercolor}
      weight={weight}
      smooth={true}
    >
      {children}
    </LinkAnchor>
  )
}

const Text = props => {
  const { children } = props
  return <React.Fragment>{children}</React.Fragment>
}

const defaultProps = {
  className: null,
  children: null,
  align: null,
  fontcolor: "#000",
  weight: 400,
  fontSize: null,
  display: "block",
  hovercolor: null,
  onClick: null,
  space: null,
  lineHeight: "normal"
}

H1Style.defaultProps = defaultProps
H2Style.defaultProps = defaultProps
H3Style.defaultProps = defaultProps
H4Style.defaultProps = defaultProps
H5Style.defaultProps = defaultProps
H6Style.defaultProps = defaultProps
Link.defaultProps = defaultProps

Text.H1 = H1Style
Text.H2 = H2Style
Text.H3 = H3Style
Text.H4 = H4Style
Text.H5 = H5Style
Text.H6 = H6Style
Text.Custom = CustomStyle
Text.Link = Link

export default Text
