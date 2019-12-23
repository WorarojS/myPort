import React from "react"
import { Container } from "reactstrap"
import { Section, Flex } from "../components"

const Home = () => {
  return (
    <React.Fragment>
      <Section bgColor='#F8F9F8'>
        <Container>
          <Flex minHeight='calc(100vh - 5em)'></Flex>
        </Container>
      </Section>
    </React.Fragment>
  )
}

export default Home
