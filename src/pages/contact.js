import React from "react"
import { Section, Flex, Text, FormContact } from "../components"
import { Images } from "../assets"

const Contact = () => {
  return (
    <React.Fragment>
      <Section id='contact' bg='#F8F9F8'>
        <Flex className='responsive-wrap-flex'>
          <Flex
            className='responsive-flex'
            aos='fade-right'
            aosDuration='1200'
            bgImage={`${Images["profile2.jpg"]}`}
            width='50%'
            flexDirection='column'
            height='50vh'
          >
            <Text.H4 fontcolor='#ffff' weight='700'>
              CONTACT ME
            </Text.H4>
            <Text.Custom
              fontcolor='#ffff'
              fontSize='1em'
              space='0.1em'
              weight='400'
              lineHeight='1.7em'
              margin='1em'
            >
              I am currently based in Vancouver. Please contact me whenever you
              want. Just send me a message in the form with any question you may
              have. I'm happy to answer any question. <br />
              <br />
              Looking forward to hear back from you.
            </Text.Custom>
          </Flex>
          <Flex
            className='responsive-flex'
            aos='fade-left'
            aosDuration='1200'
            width='50%'
            height='50vh'
            flexDirection='column'
            alignItems='flex-start'
            padding='1em'
          >
            <FormContact />
          </Flex>
        </Flex>
      </Section>
    </React.Fragment>
  )
}

export default Contact
