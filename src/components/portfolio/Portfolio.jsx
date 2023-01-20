import Navbar from "../navbar/Navbar"
import { useEffect } from 'react'
import './Portfolio.css'
import ProjectComponent from "./ProjectComponent"
import TekiDashboard from "../../images/teki/teki-dashboard.jpg"
import MBDashboard from "../../images/mind-bubble/mb1.jpg"
import cc1 from "../../images/classicars/cc1.jpg"

export default function Portfolio() {
  useEffect(() => {
    setTimeout(() => {
     document.getElementById('nav-container').style.opacity = 1
    }, 100)
  })

  return (
    <div className="home-container">
      <div id="nav-container" className="left-container trans">
        <Navbar />
      </div>
      <div className="right-container">
        <h1>Portfolio</h1>
        <div className="project-container">
          <ProjectComponent name="Teki" img={TekiDashboard} code="https://github.com/NicFie/Teki"  live="https://teki-tournie.herokuapp.com/dashboard"/>
          <ProjectComponent name="Mind-Bubble" img={MBDashboard} code="https://github.com/CaptainKurt91/mind-bubble"  live="https://www.mind-bubble.com/"/>
          <ProjectComponent name="ClassiCars" img={cc1} code="https://github.com/WillDunwoody/classicars"  live="https://classicars.herokuapp.com/"/>
          <ProjectComponent name="Teki" img={TekiDashboard} code="https://github.com/NicFie/Teki"  live="https://teki-tournie.herokuapp.com/dashboard"/>
          <ProjectComponent name="Teki" img={TekiDashboard} code="https://github.com/NicFie/Teki"  live="https://teki-tournie.herokuapp.com/dashboard"/>
          <ProjectComponent name="Teki" img={TekiDashboard} code="https://github.com/NicFie/Teki"  live="https://teki-tournie.herokuapp.com/dashboard"/>
        </div>
      </div>
    </div>
  )
}
