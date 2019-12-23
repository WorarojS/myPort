import React from "react"
import { Container } from "reactstrap"
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

const Home = () => {
  const lottie = {
    loop: true,
    autoplay: true,
    animationData: LottieArt["home1.json"]
  }
  return (
    <React.Fragment>
      <Section bg='linear-gradient(to right,#F09819,#EDDE5D)'>
        <Container>
          <Flex height='calc(100vh - 6em)' justifyContent='flex-start'>
            <Flex width='50%' flexDirection='column' alignItems='flex-start'>
              <Text.H1 margin='0.2em 0' weight='300' space='0.3em'>
                CHIN・SU
              </Text.H1>
              <Text.H4 margin='0.2em 0' weight='700' space='0.5em'>
                FRONTEND DEVELOPER
              </Text.H4>
              <Text.H6 margin='0.5em 0' space='0.2em'>
                at Nellika Co ・ Vancouver | Bangkok
              </Text.H6>
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
            </Flex>
            <Flex width='50%'>
              <Lottie options={lottie} width='70%' />
              <SocialBar />
            </Flex>
          </Flex>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Home
