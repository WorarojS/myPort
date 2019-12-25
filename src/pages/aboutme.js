import React from "react"
import { Container } from "reactstrap"
import { Section, Flex, Text, Button, Image, DivWrapper } from "../components"
import { Images } from "../assets"

const AboutMe = () => {
  return (
    <React.Fragment>
      <Section id='aboutme' bg='#F8F9F8'>
        <Container>
          <Flex aos='fade-up' aosDuration='1000' flexDirection='column'>
            <DivWrapper className='headline' />
            <Text.Custom
              fontSize='0.7em'
              fontcolor='rgb(125,125,125,0.5)'
              space='1em'
              weight='700'
            >
              ABOUT ME
            </Text.Custom>
          </Flex>
          <Flex minHeight='100vh'>
            <Flex aos='fade-right' aosDuration='1300' width='50%'>
              <Image width='90%' source={`${Images["profile.jpg"]}`} />
            </Flex>

            <Flex width='50%' flexDirection='column' alignItems='flex-start'>
              <Text.Custom
                className='font1'
                aos='fade-left'
                aosDuration='1300'
                margin='0 0 1em 0'
                fontSize='2.2em'
                space='0.2em'
              >
                Chin Woraroj <br />
                Suruxruttanaskul
              </Text.Custom>
              <Text.H5
                className='font2'
                aos='fade-left'
                aosDuration='1300'
                weight='300'
                lineHeight='1.7em'
              >
                My name is Chin. I am junior Front-end Developer currently
                working remotely at Nellika Consulting responsible for develop
                user interface website working closely with designer team using
                ReactJS, HTML, CSS JavaScript, styled-components, Gitlab and
                some experience in design with Adobe XD. Graduated Bachelor of
                Business Administration and Diploma in Web and Mobile
                Application Development.
              </Text.H5>
              <DivWrapper aos='fade-left' aosDuration='1300'>
                <Button
                  border='1px solid #F09819'
                  bgColor='rgb(0,0,0,0)'
                  fontcolor='#F09819'
                  hoverBgColor='#F09819'
                  hoverFontcolor='white'
                  padding='0.5em 1.5em'
                  fontSize='0.8em'
                  margin='1em 0'
                >
                  EXPERIENCE
                </Button>
              </DivWrapper>
              <Text.H5
                className='font2'
                aos='fade-left'
                aosDuration='1300'
                weight='300'
                lineHeight='1.7em'
              >
                With a passion for create and develop in Content and Website as
                a self-motivated team player. I am constantly pursuing my
                passion for web technologies and other design related topics.
              </Text.H5>
              <DivWrapper aos='fade-left' aosDuration='1300'>
                <Button
                  border='1px solid #F09819'
                  bgColor='rgb(0,0,0,0)'
                  fontcolor='#F09819'
                  hoverBgColor='#F09819'
                  hoverFontcolor='white'
                  padding='0.5em 1.5em'
                  fontSize='0.8em'
                  margin='1em 0'
                >
                  SKILLS
                </Button>
              </DivWrapper>
              <Text.H5
                className='font2'
                aos='fade-left'
                aosDuration='1300'
                weight='300'
                lineHeight='1.7em'
              >
                I have both the skill and knowledge to dive deep into the world.
                As a self-motivated team player with both communication in
                English and Thai.
              </Text.H5>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default AboutMe
