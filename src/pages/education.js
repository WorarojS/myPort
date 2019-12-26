import React from "react"
import { Container } from "reactstrap"
import { Section, Flex, DivWrapper, Text } from "../components"
import { education } from "../util"
const Education = () => {
  return (
    <React.Fragment>
      <Section bg='#F8F9F8'>
        <Container>
          <Flex padding='1em'>
            <Text.Custom
              fontSize='0.7em'
              fontcolor='rgb(125,125,125,0.5)'
              space='1em'
              weight='700'
            >
              ••••••EDUCATION••••••
            </Text.Custom>
          </Flex>
          <Flex
            flexDirection='column'
            alignItems='center'
            padding='2em 0 3em 25%'
          >
            {education.map((data, index) => (
              <Flex
                flexDirection='column'
                alignItems='flex-start'
                alignSelf='flex-start'
                padding='2em 0'
              >
                <Text.H2 aos='fade-left' aosDuration='1200' className='font1'>
                  {data.year}
                </Text.H2>
                <Text.Custom
                  aos='fade-left'
                  aosDuration='1600'
                  className='exp'
                  fontSize='1.4em'
                  space='0.1em'
                  weight='300'
                  lineHeight='1.7em'
                  padding='0 0 0 1em'
                >
                  {data.place}
                </Text.Custom>
                <Text.H6 aos='fade-left' aosDuration='1900' padding='0 0 0 4em'>
                  {data.quali}
                </Text.H6>
              </Flex>
            ))}
          </Flex>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Education
