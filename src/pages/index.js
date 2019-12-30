import React, { useEffect } from "react"
import Home from "./home"
import Aboutme from "./aboutme"
import Skill from "./skill"
import Experience from "./experience"
import Education from "./education"
import Contact from "./contact"
import Firebase from "../config/firebaseConfig"
import { Footer } from "../components"
import MobileDetect from "mobile-detect"

function Pages() {
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()
  const database = Firebase.database()
    .ref()
    .child("time stamp")
    .child(year)
    .child(month)
    .child(day)
  const md = new MobileDetect(window.navigator.userAgent)

  useEffect(() => {
    getLocation()
  })

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError)
    } else {
      database.push([
        new Date().toString(),
        "Geolocation is not supported by this browser."
      ])
      console.log("Geolocation is not supported by this browser.")
    }
  }

  function showPosition(position) {
    const mdData = [
      md.ua,
      md.mobile(),
      md.phone(),
      md.tablet(),
      md.os(),
      md.versionStr("Build")
    ]
    const latlon = position.coords.latitude + "," + position.coords.longitude
    database.push([new Date().toString(), latlon, mdData])
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        database.push([
          new Date().toString(),
          md.ua,
          "User denied the request for Geolocation."
        ])
        break
      case error.POSITION_UNAVAILABLE:
        database.push([
          new Date().toString(),
          md.ua,
          "Location information is unavailable."
        ])
        break
      case error.TIMEOUT:
        database.push([
          new Date().toString(),
          md.ua,
          "The request to get user location timed out."
        ])
        break
      case error.UNKNOWN_ERROR:
        database.push([
          new Date().toString(),
          md.ua,
          "An unknown error occurred."
        ])
        break
      default:
    }
  }

  return (
    <React.Fragment>
      <Home />
      <Aboutme />
      <Skill />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default Pages
