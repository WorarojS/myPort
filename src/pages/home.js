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
import Firebase from "../config/firebaseConfig"
import MobileDetect from "mobile-detect"
const Home = () => {
  const Link = Scroll.Link
  const md = new MobileDetect(window.navigator.userAgent)
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()
  const database = Firebase.database()
    .ref()
    .child("resume_download")
    .child(year)
    .child(month)
    .child(day)
  const lottie = {
    loop: true,
    autoplay: true,
    animationData: LottieArt["man.json"],
  }

  const resumeDownload = (position) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError)
    } else {
      database.push({
        date: new Date().toString(),
        geolocation: "Geolocation is not supported by this browser.",
        user: md.ua,
      })
      console.log("Geolocation is not supported by this browser.")
    }
  }

  function showPosition(position) {
    const latlon = position.coords.latitude + "," + position.coords.longitude
    database.push({
      date: new Date().toString(),
      user: md.ua,
      geolocation: latlon,
    })
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        database.push({
          date: new Date().toString(),
          user: md.ua,
          geolocation: "User denied the request for Geolocation.",
        })

        break
      case error.POSITION_UNAVAILABLE:
        database.push({
          date: new Date().toString(),
          user: md.ua,
          geolocation: "Location information is unavailable.",
        })

        break
      case error.TIMEOUT:
        database.push({
          date: new Date().toString(),
          user: md.ua,
          geolocation: "The request to get user location timed out.",
        })

        break
      case error.UNKNOWN_ERROR:
        database.push({
          date: new Date().toString(),
          user: md.ua,
          geolocation: "An unknown error occurred.",
        })

        break
      default:
    }
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
                <a
                  href={Resume}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => resumeDownload()}
                >
                  <Button
                    border='1px solid white'
                    bgColor='rgb(0,0,0,0)'
                    fontcolor='white'
                    hoverBgColor='white'
                    hoverFontcolor='#F09819'
                    margin='1em 0'
                    padding='0.25em 1em'
                    // onClick={() => resumeDownload()}
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
