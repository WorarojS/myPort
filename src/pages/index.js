import React from "react"
import Home from "./home"
import Aboutme from "./aboutme"
import Skill from "./skill"
import Experience from "./experience"
import Education from "./education"
import Contact from "./contact"
function Pages() {
  return (
    <React.Fragment>
      <Home />
      <Aboutme />
      <Skill />
      <Experience />
      <Education />
      <Contact />
    </React.Fragment>
  )
}

export default Pages
