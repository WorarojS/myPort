import React from "react"
import { Container } from "reactstrap"
import { Section, Flex, Text } from "../index"
import { Link, FontAwesomeIconStyled } from "./styled"
import { socialBar } from "../../util"

const Footer = () => {
  return (
    <React.Fragment>
      <Section className='home' padding='2em 0'>
        <Container>
          <Flex className='responsive-wrap-flex'>
            <Flex
              className='responsive-flex'
              flexDirection='column'
              alignItems='flex-start'
              width='50%'
            >
              <Text.H3 className='font1' padding='0 0 1em 0' fontcolor='#ffff'>
                Personal Portfolio
              </Text.H3>
              <Text.H5 fontcolor='#ffff'>
                ©️Copyright 2020 Proudly created by Chin Woraroj
                Suruxruttanaskul.
              </Text.H5>
            </Flex>
            <Flex
              className='responsive-flex'
              flexDirection='column'
              alignItems='flex-end'
              width='50%'
            >
              <Link fontcolor='#ffff' href='mailto:wrj.ss@icloud.com'>
                wrj.ss@icloud.com
              </Link>
              <Link fontcolor='#ffff' href='mailto:wrj.ss@icloud.com'>
                woraroj.s@nellilka.co.th
              </Link>
              <Flex>
                {socialBar.map((data, index) => (
                  <Link
                    href={data.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    key={index}
                  >
                    <FontAwesomeIconStyled
                      color='#ffff'
                      size='lg'
                      icon={data.icon}
                    />
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Footer
