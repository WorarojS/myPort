import React from "react"
import { Container } from "reactstrap"
import { Header } from "../components"

import {
  Section,
  Flex,
  Text,
  Button,
  SocialBar,
  DivWrapper
} from "../components"
import { LottieArt } from "../assets"
import Lottie from "react-lottie"
import * as Scroll from "react-scroll"

const Home = () => {
  const Link = Scroll.Link
  const lottie = {
    loop: true,
    autoplay: true,
    animationData: LottieArt["man.json"]
  }

  return (
    <React.Fragment>
      {/* <Section id='home' bg='linear-gradient(to right,#D6A4A4,#d1cbe2)'> */}
      <Section id='home' bg='linear-gradient(to right,#F09819,#EDDE5D)'>
        {/* <Section bg='linear-gradient(to right,#EC6F66,#F3A183)'> */}
        <Container>
          <Header />
          <Flex height='calc(100vh - 6em)' justifyContent='flex-start'>
            <Flex
              className='responsive-flex'
              width='50%'
              flexDirection='column'
              alignItems='flex-start'
            >
              <Text.H1
                aos='fade-right'
                aosDuration='1300'
                margin='0.2em 0'
                weight='300'
                space='0.3em'
              >
                CHIN・SU
              </Text.H1>
              <Text.H4
                className='home-position'
                aos='fade-right'
                aosDuration='1600'
                margin='0.2em 0'
                weight='700'
                space='0.5em'
              >
                FRONTEND DEVELOPER
              </Text.H4>
              <Text.H6
                aos='fade-right'
                aosDuration='1900'
                margin='0.5em 0'
                space='0.2em'
              >
                at Nellika Co ・ Vancouver | Bangkok
              </Text.H6>
              <DivWrapper aos='fade-right' aosDuration='2100'>
                <Link to='aboutme' smooth={true}>
                  <Button
                    border='1px solid white'
                    bgColor='rgb(0,0,0,0)'
                    fontcolor='white'
                    hoverBgColor='white'
                    hoverFontcolor='#F09819'
                    margin='1em 0'
                    padding='0.5em 2em'
                  >
                    About Me
                  </Button>
                </Link>
              </DivWrapper>
            </Flex>
            <Flex className='home-hide' width='50%'>
              <Lottie options={lottie} width='100%' />
            </Flex>
            <SocialBar />
          </Flex>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Home
