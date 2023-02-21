import Navbar from "../navbar/Navbar"
import React, { useState, useEffect } from 'react'
import './Portfolio.css'
import ProjectComponent from "./ProjectComponent"
import TekiDashboard from "../../images/teki/teki-dashboard.jpg"
import MBDashboard from "../../images/mind-bubble/mb1.jpg"
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
             "The goal of this app was to create a space where you could challenge your friends or other players in coding challenges."]
  })

  const openComponent = (comp) => {
    setComp(comp)
    setTimeout(() => {
      document.getElementById('cover-image').style.opacity = 1
     }, 300)
  }

  const pjctComps = {
    teki: {
      name: "Teki",
      imgSrc: TekiDashboard,
      code: "https://github.com/NicFie/Teki",
      live: "https://teki-tournie.herokuapp.com/dashboard",
      text: ["Teki is a coding battle web app! Play against other users in a race to solve coding problems!",
             "The goal of this app was to create a space where you could challenge your friends or other players in coding challenges."]
    },
    mindbubble: {
      name: "Mind-Bubble",
      imgSrc: MBDashboard,
      code: "https://github.com/CaptainKurt91/mind-bubble",
      live: "https://www.mind-bubble.com/",
      text: ["An app built to help people with ADHD navigate the world."]
    },
    classicars: {
      name: "ClassiCars",
      imgSrc: cc1,
      code:  "https://github.com/WillDunwoody/classicars",
      live: "https://classicars.herokuapp.com/",
      text: ["Lorem ipsum black faklsjflsadkj ebgbjkab enklakjnsd"]
    },
    watchlist: {
      name: "Watch-List",
      imgSrc: wl1,
      code: "https://github.com/WillDunwoody/rails-watch-list",
      live: "https://mysite-x2vo.onrender.com/" ,
      text: ["Lorem ipsum black faklsjflsadkj ebgbjkab enklakjnsd"]
    },
    tictactoe: {
      name: "Tic-Tac-Toe",
      imgSrc: ttt1,
      code: "https://github.com/WillDunwoody/tic-tac-toe",
      live: "https://willdunwoody.github.io/tic-tac-toe/",
      text: ["Lorem ipsum black faklsjflsadkj ebgbjkab enklakjnsd"]
    }
  };

  useEffect(() => {
    setTimeout(() => {
     document.getElementById('nav-container').style.opacity = 1
    }, 100)
  });

  return (
    <div className="home-container">
      <div id="nav-container" className="nav-container trans">
        <Navbar />
      </div>
      <div className="portfolio-left-container">
        <h1 className="portfolio-header">Port<span className="color-yellow">folio</span></h1>
        <div className="project-name" onClick={() => openComponent(pjctComps.teki)}>Teki</div>
        <div className="project-name" onClick={() => openComponent(pjctComps.mindbubble)}>Mind Bubble</div>
        <div className="project-name" onClick={() => openComponent(pjctComps.classicars)}>ClassiCars</div>
        <div className="project-name" onClick={() => openComponent(pjctComps.watchlist)}>Watch List</div>
        <div className="project-name" onClick={() => openComponent(pjctComps.tictactoe)}>Tic Tac Toe</div>
      </div>
      <div className="portfolio-right-container" id="project-container">
        <ProjectComponent name={comp.name} img={comp.imgSrc} code={comp.code} live={comp.live} text={comp.text}/>
      </div>
    </div>
  )
}
