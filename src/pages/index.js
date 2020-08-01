import React, { useState } from "react"
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
  const [getIp, setIp] = useState({})
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

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError)
  } else {
    database.push({
      date: new Date().toString(),
      geolocation: "Geolocation is not supported by this browser.",
      ip_address: getIp,
    })
    console.log("Geolocation is not supported by this browser.")
  }

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

            asn: result.asn.name,
            asn_domain: result.asn.domain,
            asn_route: result.asn.route,
          })
        },
        (error) => {
          setIp({ error })
        }
      )
    count()
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

                asn: result.asn.name,
                asn_domain: result.asn.domain,
                asn_route: result.asn.route,
              })
            },
            (error) => {
              setIp({ error })
            }
          )
        count()
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

                asn: result.asn.name,
                asn_domain: result.asn.domain,
                asn_route: result.asn.route,
              })
            },
            (error) => {
              setIp({ error })
            }
          )
        count()
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

                asn: result.asn.name,
                asn_domain: result.asn.domain,
                asn_route: result.asn.route,
              })
            },
            (error) => {
              setIp({ error })
            }
          )
        count()
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

                asn: result.asn.name,
                asn_domain: result.asn.domain,
                asn_route: result.asn.route,
              })
            },
            (error) => {
              setIp({ error })
            }
          )
        count()
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
