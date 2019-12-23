import React from "react"
import { Container } from "reactstrap"
import { Section, Flex, DivWrapper, Text } from "../index"
import { Head, Nav } from "./styled"
import { navBar } from "../../util"

const Header = () => {
  return (
    <React.Fragment>
      <Section bgColor='#F8F9F8'>
        <Container>
          <Flex minHeight='5em' width='100%' justifyContent='flex-start'>
            <DivWrapper>
              <Head>WORAROJ SURUXRUTTANASKUL</Head>
            </DivWrapper>

            <Flex grow='1' justifyContent='flex-end'>
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
