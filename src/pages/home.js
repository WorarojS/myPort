import React from "react"
import { Container } from "reactstrap"
import { Header } from "../components"

import {
  Section,
  Flex,
  Text,
  Button,
  SocialBar,
  DivWrapper,
} from "../components"
import { LottieArt } from "../assets"
import Lottie from "react-lottie"
import * as Scroll from "react-scroll"
import Resume from "../assets/resume2020.pdf"

const Home = () => {
  const Link = Scroll.Link
  const lottie = {
    loop: true,
    autoplay: true,
    animationData: LottieArt["man.json"],
  }

  return (
    <React.Fragment>
      {/* <Section id='home' bg='linear-gradient(to right,#D6A4A4,#d1cbe2)'> */}
      <Section className='home'>
        {/* <Section bg='linear-gradient(to right,#f09819,#dfc942)'> */}
        {/* <Section bg='linear-gradient(to left,#debecc,#faaca8)'> */}
        <Container>
          <Header />
          <Flex minHeight='calc(100vh - 6em)' justifyContent='flex-start'>
            <Flex
              className='responsive-flex-home'
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
              <Text.H5
                className='home-position'
                aos='fade-right'
                aosDuration='1600'
                margin='0.2em 0'
                weight='700'
                space='0.5em'
              >
                REACT・FRONTEND DEVELOPER
              </Text.H5>
              <Text.H6
                aos='fade-right'
                aosDuration='1900'
                margin='0.5em 0'
                space='0.2em'
                weight={700}
              >
                Looking for Job Opportunity ・ Vancouver | Bangkok
              </Text.H6>
              <Text.Custom
                aos='fade-right'
                aosDuration='1900'
                margin='5px 0 0 0'
                space='0.2em'
                fontSize='0.40em'
                weight={600}
              >
                Former Intern Frontend Dev at Nellika.co
              </Text.Custom>
              <Text.Custom
                aos='fade-right'
                aosDuration='1900'
                margin='5px 0 0 0'
                space='0.2em'
                fontSize='0.40em'
                weight={400}
              >
                Former WMAD Student at Cornerstone College
              </Text.Custom>
              <Text.Custom
                aos='fade-right'
                aosDuration='1900'
                margin='5px 0 0 0'
                space='0.2em'
                fontSize='0.40em'
                weight={200}
              >
                Former BBA Student at Dusit Thani College
              </Text.Custom>
              <DivWrapper aos='fade-right' aosDuration='2100'>
                <Link to='aboutme' smooth={true}>
                  <Button
                    border='1px solid white'
                    bgColor='rgb(0,0,0,0)'
                    fontcolor='white'
                    hoverBgColor='white'
                    hoverFontcolor='#F09819'
                    margin='1em 1em 0 0'
                    padding='0.25em 1em'
                  >
                    About Me
                  </Button>
                </Link>
                <a href={Resume} target='_blank'>
                  <Button
                    border='1px solid white'
                    bgColor='rgb(0,0,0,0)'
                    fontcolor='white'
                    hoverBgColor='white'
                    hoverFontcolor='#F09819'
                    margin='1em 0'
                    padding='0.25em 1em'
                  >
                    My Resume
                  </Button>
                </a>
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
