import React from "react"
import Home from "./home"
import Aboutme from "./aboutme"
import Skill from "./skill"
import Experience from "./experience"
import Education from "./education"
import Contact from "./contact"
import Firebase from "../config/firebaseConfig"
import { Footer } from "../components"
import MobileDetect from "mobile-detect"
import Project from "./project"
function Pages() {
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()
  const database = Firebase.database()
    .ref()
    .child("time stamp V2")
    .child(year)
    .child(month)
    .child(day)

  const md = new MobileDetect(window.navigator.userAgent)

  getLocation()

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
  const FbView = Firebase.database()
    .ref()
    .child("time stamp V2")
    .child("view")

  FbView.once("value", snap => {
    // setView(snap.val())

    let lastView = Number(snap.val())
    let viewCount = lastView + 1
    FbView.set(viewCount)
  })

  function showPosition(position) {
    // FbView.update({ view: currentView + 1 })
    const latlon = position.coords.latitude + "," + position.coords.longitude
    database.push([new Date().toString(), md.ua, latlon])
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
      <Project />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default Pages