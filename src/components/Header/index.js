import React from "react"
import { Container } from "reactstrap"
import { Section, Flex, DivWrapper } from "../index"
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
      <Section bg='linear-gradient(to right,#F09819,#EDDE5D)'>
        <Container>
          <Flex height='6em' width='100%' justifyContent='flex-start'>
            <DivWrapper margin='0 0 0 -50px'>
              {/* <Head>WORAROJ SURUXRUTTANASKUL</Head> */}
              <Lottie options={defaultOptions} width='280px' />
            </DivWrapper>
            <Flex className='home-hide' grow='1' justifyContent='flex-end'>
              {navBar.map((data, index) => (
                <Nav key={index} to={data}>
                  {data}
                </Nav>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Header
