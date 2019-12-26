import React from "react"
import { Container } from "reactstrap"
import { Section, Text, Flex, DivWrapper, Image } from "../components"
import { tool, skill } from "../util"
const Skill = () => {
  return (
    <React.Fragment>
      <Section bg='#F8F9F8'>
        <Container>
          <DivWrapper>
            <Flex aos='fade-up' aosDuration='1000' flexDirection='column'>
              <Text.Custom margin='0' fontcolor='rgb(125,125,125,0.5)'>
                •
              </Text.Custom>
              <Text.Custom margin='0' fontcolor='rgb(125,125,125,0.5)'>
                •
              </Text.Custom>
              <Text.Custom fontcolor='rgb(125,125,125,0.5)'>•</Text.Custom>
              <Text.Custom
                fontSize='0.7em'
                fontcolor='rgb(125,125,125,0.5)'
                space='1em'
                padding='0 0 0 1em'
                weight='700'
                align='center'
              >
                SKILL
              </Text.Custom>
            </Flex>
            <Flex
              className='responsive-wrap-flex '
              padding='4em 0'
              alignItems='flex-start'
            >
              <Flex
                className='responsive-flex'
                aos='fade-right'
                aosDuration='1300'
                width='50%'
                flexDirection='column'
                alignItems='flex-start'
              >
                <Text.H4 space='0.2em' className='font1' lineHeight='1.5em'>
                  LANGUAGES FRAMEWORKS
                </Text.H4>
                <Flex
                  className='responsive-flex'
                  justifyContent='flex-start'
                  alignItems='baseline'
                  wrap='wrap'
                  padding='2em 0'
                >
                  {skill.map((data, index) => (
                    <Flex
                      width='120px'
                      flexDirection='column'
                      margin='0.3em'
                      key={index}
                    >
                      <Image width='50px' margin='1em' source={data.icon} />
                      <Text.Custom fontSize='0.8em'>{data.name}</Text.Custom>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
              <Flex
                className='responsive-flex'
                aos='fade-left'
                aosDuration='1300'
                width='50%'
                flexDirection='column'
                alignItems='flex-start'
              >
                <Text.H4 space='0.2em' className='font1' lineHeight='1.5em'>
                  TOOLS
                </Text.H4>
                <Flex
                  className='responsive-flex'
                  justifyContent='flex-start'
                  alignItems='baseline'
                  wrap='wrap'
                  padding='2em 0'
                >
                  {tool.map((data, index) => (
                    <Flex
                      width='120px'
                      flexDirection='column'
                      margin='0.3em'
                      key={index}
                    >
                      <Image width='50px' margin='1em' source={data.icon} />
                      <Text.Custom fontSize='0.8em'>{data.name}</Text.Custom>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </DivWrapper>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Skill
