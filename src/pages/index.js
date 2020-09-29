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
import Project from "./project"
import { TOKEN } from "../config/api"
function Pages() {
  const md = new MobileDetect(window.navigator.userAgent)
  const year = new Date().getFullYear()
  const month = new Date().getMonth() + 1
  const day = new Date().getDate()
  const database = Firebase.database()
    .ref()
    .child("time_stamp_v2")
    .child(year)
    .child(month)
    .child(day)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError)
      count()
    } else {
      database.push({
        date: new Date().toString(),
        geolocation: "Geolocation is not supported by this browser.",
        user: md.ua,
      })
      count()
      console.log("Geolocation is not supported by this browser.")
    }
  })

  const count = () => {
    const FbView = Firebase.database()
      .ref()
      .child("time_stamp_v2")
      .child("view")
    FbView.once("value", (snap) => {
      let lastView = Number(snap.val())
      let viewCount = lastView + 1
      FbView.set(viewCount)
    })
  }

  function showPosition(position) {
    const latlon = position.coords.latitude + "," + position.coords.longitude
    fetch(`https://ipinfo.io?token=${TOKEN}`)
      .then((res) => res.json())
      .then(
        (result) => {
          database.push({
            date: new Date().toString(),
            user: md.ua,
            geolocation: latlon,
            ip_address: result.ip,
            ip_location: result.loc,
            from:
              result.city +
              ", " +
              result.region +
              ", " +
              result.country +
              ", " +
              result.postal,

            asn: result.hostname,
            asn_domain: result.org,
           
          })
        },
        (error) => {
          database.push({
            date: new Date().toString(),
            user: md.ua,
            geolocation: latlon,
          })
        }
      )
  }
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        fetch(`https://ipinfo.io?token=${TOKEN}`)
          .then((res) => res.json())
          .then(
            (result) => {
              database.push({
                date: new Date().toString(),
                user: md.ua,
                geolocation: "User denied the request for Geolocation.",
                ip_address: result.ip,
                ip_location: result.loc,
                from:
                  result.city +
                  ", " +
                  result.region +
                  ", " +
                  result.country +
                  ", " +
                  result.postal,

                asn: result.hostname,
                asn_domain: result.org,
             
              })
            },
            (error) => {
              database.push({
                date: new Date().toString(),
                user: md.ua,
                geolocation: "User denied the request for Geolocation.",
                ip_address: error,
              })
            }
          )

        break
      case error.POSITION_UNAVAILABLE:
        fetch(`https://ipinfo.io?token=${TOKEN}`)
          .then((res) => res.json())
          .then(
            (result) => {
              database.push({
                date: new Date().toString(),
                user: md.ua,
                geolocation: "Location information is unavailable.",
                ip_address: result.ip,
                ip_location: result.loc,
                from:
                  result.city +
                  ", " +
                  result.region +
                  ", " +
                  result.country +
                  ", " +
                  result.postal,

                  asn: result.hostname,
                  asn_domain: result.org,
              })
            },
            (error) => {
              database.push({
                date: new Date().toString(),
                user: md.ua,
                geolocation: "Location information is unavailable.",
                ip_address: error,
              })
            }
          )

        break
      case error.TIMEOUT:
        fetch(`https://ipinfo.io?token=${TOKEN}`)
          .then((res) => res.json())
          .then(
            (result) => {
              database.push({
                date: new Date().toString(),
                user: md.ua,
                geolocation: "The request to get user location timed out.",
                ip_address: result.ip,
                ip_location: result.loc,
                from:
                  result.city +
                  ", " +
                  result.region +
                  ", " +
                  result.country +
                  ", " +
                  result.postal,

                  asn: result.hostname,
                  asn_domain: result.org,
              })
            },
            (error) => {
              database.push({
                date: new Date().toString(),
                user: md.ua,
                geolocation: "The request to get user location timed out.",
                ip_address: error,
              })
            }
          )

        break
      case error.UNKNOWN_ERROR:
        fetch(`https://ipinfo.io?token=${TOKEN}`)
          .then((res) => res.json())
          .then(
            (result) => {
              database.push({
                date: new Date().toString(),
                user: md.ua,
                geolocation: "An unknown error occurred.",
                ip_address: result.ip,
                ip_location: result.loc,
                from:
                  result.city +
                  ", " +
                  result.region +
                  ", " +
                  result.country +
                  ", " +
                  result.postal,

                  asn: result.hostname,
                  asn_domain: result.org,
              })
            },
            (error) => {
              database.push({
                date: new Date().toString(),
                user: md.ua,
                geolocation: "An unknown error occurred.",
                ip_address: error,
              })
            }
          )

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
