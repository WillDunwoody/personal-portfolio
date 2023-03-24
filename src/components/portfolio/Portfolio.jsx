import Navbar from "../navbar/Navbar"
import React, { useState, useEffect } from 'react'
import './Portfolio.css'
import ProjectComponent from "./ProjectComponent"
import TekiDashboard from "../../images/teki/teki-dashboard.jpg"
import MBDashboard from "../../images/mind-bubble/mb1.png"
import cc1 from "../../images/classicars/cc1.jpg"
import wl1 from "../../images/watch-list/wl1.jpg"
import ttt1 from "../../images/tic-tac-toe/ttt1.jpg"



export default function Portfolio() {

  const [comp, setComp] = React.useState({
      name: "Teki",
      imgSrc: TekiDashboard,
      code: "https://github.com/NicFie/Teki",
      live: "https://teki-tournie.herokuapp.com/dashboard",
      text: ["Teki is a coding battle web app! Play against other users in a race to solve coding problems!",
             "The goal of this app was to create a space where you could battle your friends or other players in coding challenges.",
             "Built with Ruby on Rails we utilize stimulus and AJAX to create channels so that everything is in real time.",
             "If you would like to give it a go two players can login as guest1, guest2 and passwords are pa55w0rd",]
  })

  useEffect(() => {
    const ids = ['nav-container', 'portfolioheader', 'teki', 'mindbubble', 'classicars', 'watchlist', 'coverimage', 'comptitle', 'comptext', 'compbutton']
    let time = 100

    ids.forEach((id) => {
      setTimeout(() => {
        document.getElementById(id).style.opacity = 1
       }, time)
       time += 200
    })
   })

  const openComponent = (comp) => {
    const ids = ['comptitle', 'comptext', 'compbutton']
    let time = 700

    ids.map((id) => {
      let doc = document.getElementById(id)
      doc.style.transition = "0.5s"
      doc.style.opacity = 0
    })

    setTimeout(() => {
      setComp(comp)
     }, 500)

    ids.forEach((id) => {
    setTimeout(() => {
      let doc = document.getElementById(id)
      doc.style.transition = "1.5s"
      doc.style.opacity = 1
      }, time)
      time += 200
    })
  }

  const pjctComps = {
    teki: {
      name: "Teki",
      imgSrc: TekiDashboard,
      code: "https://github.com/NicFie/Teki",
      live: "https://teki-tournie.herokuapp.com/dashboard",
      text: ["Teki is a coding battle web app! Play against other users in a race to solve coding problems!",
             "The goal of this app was to create a space where you could battle your friends or other players in coding challenges.",
             "Built with Ruby on Rails and utilizing Stimulus, ActionCable and AJAX to create channels so that everything is in real time.",
             "If you would like to give it a go two players can login as guest1, guest2 and passwords are pa55w0rd",]
    },
    mindbubble: {
      name: "Mind-Bubble",
      imgSrc: MBDashboard,
      code: "https://github.com/CaptainKurt91/mind-bubble",
      live: "https://www.mind-bubble.com/",
      text: ["An app built to help people with ADHD navigate the world.",
             "As people with ADHD struggle to read lists we decided to create a mobile webapp that lets users create a sort of mind-map to help organize their thoughts and daily routines.",
             "If you would like to test it out you can log in as guest with password pa55w0rd ps: should be viewed in mobile mode."]
    },
    classicars: {
      name: "ClassiCars",
      imgSrc: cc1,
      code:  "https://github.com/WillDunwoody/classicars",
      live: "https://classicars.herokuapp.com/",
      text: ["Classicars is an app for people who would like to rent a classic car while on holiday",
             "Users can search for a city and see which cars are available on the dates that they would like to select.",
             "Users can also rent out their own car if they have to make a bit of money to help pay for those classic car bills",
             "This app was built with Ruby on Rails, PostgreSQL as database and using the Mapbox, Cloudinary and Flatpickr API's"]
    },
    watchlist: {
      name: "Watch-List",
      imgSrc: wl1,
      code: "https://github.com/WillDunwoody/rails-watch-list",
      live: "https://mysite-x2vo.onrender.com/" ,
      text: ["Watch list is the first project I worked on to bring all the skills I had learned together in one place.",
             "The purpose of this app was to build a Movie watch list to keep a track of movies that I would like to watch and saving them for later.",
             "Built with Ruby on Rails, PostgreSQL and using a movie database API."]
    }
  };

  return (
    <div className="home-container">
      <div id="nav-container" className="nav-container trans">
        <Navbar />
      </div>
      <div className="portfolio-left-container">
        <h1 className="portfolio-header trans" id="portfolioheader">Port<span className="color-yellow">folio</span></h1>
        <div className="project-name trans" id="teki" onClick={() => openComponent(pjctComps.teki)}>Teki</div>
        <div className="project-name trans" id="mindbubble"onClick={() => openComponent(pjctComps.mindbubble)}>Mind Bubble</div>
        <div className="project-name trans" id="classicars"onClick={() => openComponent(pjctComps.classicars)}>ClassiCars</div>
        <div className="project-name trans" id="watchlist"onClick={() => openComponent(pjctComps.watchlist)}>Watch List</div>
      </div>
      <div className="portfolio-right-container" id="project-container">
        <ProjectComponent name={comp.name} img={comp.imgSrc} code={comp.code} live={comp.live} text={comp.text}/>
      </div>
    </div>
  )
}
