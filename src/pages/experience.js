import React from "react"
import { Container } from "reactstrap"
import { Section, Flex, DivWrapper, Text, Image } from "../components"
import { Icon } from "../assets"

const Experience = () => {
  return (
    <React.Fragment>
      <Section id='experience' bg='#F8F9F8' padding='2em 0'>
        <Container>
          <Flex>
            <DivWrapper className='headline3' />
            <Text.Custom
              fontSize='0.7em'
              fontcolor='rgb(125,125,125,0.5)'
              space='1em'
              weight='700'
              padding='0 0 0 1em'
            >
              EXPERIENCE
            </Text.Custom>
            <DivWrapper className='headline3' />
          </Flex>
          <Flex minHeight='300px'>
            <Flex className='responsive-wrap-flex ' padding='2em 1em'>
              <Image
                aos='fade-right'
                aosDuration='1300'
                width='7em'
                source={`${Icon["logoNellika.png"]}`}
              />
              <Flex flexDirection='column' padding='1em'>
                <Text.H2 aos='fade-left' aosDuration='1200' className='font1'>
                  2019 - Present
                </Text.H2>
                <Text.Custom
                  aos='fade-left'
                  aosDuration='1600'
                  className='exp'
                  fontSize='1.4em'
                  space='0.1em'
                  weight='300'
                  lineHeight='1.7em'
                >
                  Nellika Consulting co. ltd | Intern Remote Frontend Developer
                </Text.Custom>
                <Text.H6 aos='fade-left' aosDuration='1900'>
                  Responsible for develop user interface website using React.js
                  HTML CSS JS styled-components.
                </Text.H6>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Experience
