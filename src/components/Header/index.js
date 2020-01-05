import React from "react"

import { Flex, DivWrapper } from "../index"
import { Nav } from "./styled"
import { navBar } from "../../util"
import { LottieArt } from "../../assets"
import Lottie from "react-lottie"

const Header = () => {
  const defaultOptions = {
    autoplay: true,
    animationData: LottieArt["header.json"]
  }
  return (
    <React.Fragment>
      <Flex height='6em' width='100%' justifyContent='flex-start'>
        <DivWrapper margin='0 0 0 -50px'>
          {/* <Head>WORAROJ SURUXRUTTANASKUL</Head> */}
          <Lottie options={defaultOptions} width='280px' />
        </DivWrapper>
        <Flex className='home-hide' grow='1' justifyContent='flex-end'>
          {navBar.map((data, index) => (
            <DivWrapper
              key={index}
              data-aos='fade-down'
              data-aos-duration={`1` + (index + 2) + `00`}
            >
              <Nav to={data} smooth={true}>
                {data}
              </Nav>
            </DivWrapper>
          ))}
        </Flex>
      </Flex>
    </React.Fragment>
  )
}

export default Header
