import React, { useState } from "react"
import { Container } from "reactstrap"
import { Section, Text, Flex, Image, Button } from "../components"
import { Collapse } from "reactstrap"
import { projectList } from "../util"
const Project = () => {
  const [isExpand, setExpand] = useState(false)
  return (
    <React.Fragment>
      <Section id='project' padding='2em 0' bg='#F8F9F8'>
        <Container>
          <Text.H4 space='0.2em' className='font1' lineHeight='1.5em'>
            PREVIOUS PROJECT
          </Text.H4>

          {projectList
            .filter((data, index) => index < 2)
            .map((data, index) => (
              <Flex
                className='responsive-wrap-flex '
                aos='fade-up'
                aosDuration='1000'
                justifyContent='flex-start'
                alignItems='center'
                margin='1em'
                key={index}
              >
                <Image width='300px' height='150px' source={data.image} />
                <Flex
                  className='responsive-flex'
                  flexDirection='column'
                  width='700px'
                  padding='0 1em'
                  alignItems='flex-start'
                >
                  <Text.H4 padding='0.5em 0 0.5em 0' weight='600'>
                    {data.name}
                  </Text.H4>
                  <Text.H5 padding='0 0 0.5em 0' weight='500'>
                    {data.tag}
                  </Text.H5>
                  <Text.H6 padding='0 0 0.5em 0'>{data.info}</Text.H6>
                  <Button
                    border='1px solid #F09819'
                    bgColor='#F09819'
                    fontcolor='#ffff'
                    hoverBgColor='#ffff'
                    hoverFontcolor='#F09819'
                    padding='0.5em 1.5em'
                    fontSize='0.8em'
                    onClick={(e) => (window.location.href = data.url)}
                  >
                    {data.status}
                  </Button>
                </Flex>
              </Flex>
            ))}
          <Collapse isOpen={isExpand}>
            {projectList
              .filter((data, index) => index > 2)
              .map((data, index) => (
                <Flex
                  className='responsive-wrap-flex '
                  aos='fade-up'
                  aosDuration='1000'
                  justifyContent='flex-start'
                  alignItems='flex-start'
                  margin='1em'
                  key={index}
                >
                  <Image width='300px' height='200px' source={data.image} />
                  <Flex
                    className='responsive-flex'
                    flexDirection='column'
                    width='700px'
                    padding='0 1em'
                    alignItems='flex-start'
                  >
                    <Text.H4 padding='0.5em 0 0.5em 0' weight='600'>
                      {data.name}
                    </Text.H4>
                    <Text.H5 padding='0 0 0.5em 0' weight='500'>
                      {data.tag}
                    </Text.H5>
                    <Text.H6 padding='0 0 0.5em 0'>{data.info}</Text.H6>
                    <Button
                      border='1px solid #F09819'
                      bgColor='#F09819'
                      fontcolor='#ffff'
                      hoverBgColor='#ffff'
                      hoverFontcolor='#F09819'
                      padding='0.5em 1.5em'
                      fontSize='0.8em'
                      onClick={(e) =>
                        (window.location.href =
                          "https://github.com/WorarojS?tab=repositories")
                      }
                    >
                      View on Git
                    </Button>
                  </Flex>
                </Flex>
              ))}
          </Collapse>
          <Flex>
            <Button
              border='1px solid #F09819'
              bgColor='rgb(0,0,0,0)'
              fontcolor='#F09819'
              hoverBgColor='#F09819'
              hoverFontcolor='white'
              padding='0.5em 1.5em'
              fontSize='0.8em'
              onClick={(e) => setExpand(!isExpand)}
            >
              {isExpand ? "view less" : "view more"}
            </Button>
          </Flex>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Project
