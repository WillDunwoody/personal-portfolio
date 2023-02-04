import Navbar from "../navbar/Navbar"
import { useEffect } from 'react'
import './Portfolio.css'
import ProjectComponent from "./ProjectComponent"
import TekiDashboard from "../../images/teki/teki-dashboard.jpg"
import MBDashboard from "../../images/mind-bubble/mb1.jpg"
import cc1 from "../../images/classicars/cc1.jpg"
import wl1 from "../../images/watch-list/wl1.jpg"
import ttt1 from "../../images/tic-tac-toe/ttt1.jpg"

export default function Portfolio() {
  useEffect(() => {
    setTimeout(() => {
     document.getElementById('nav-container').style.opacity = 1
    }, 100)
  })

  return (
    <div className="home-container">
      <div id="nav-container" className="nav-container trans">
        <Navbar />
      </div>
      <div className="right-container">
      <h1 className="color-yellow header">Portfolio</h1>
        <div className="project-container">
          <ProjectComponent name="Teki" img={TekiDashboard} code="https://github.com/NicFie/Teki" live="https://teki-tournie.herokuapp.com/dashboard"
                            text="Teki is a coding battle web app! Play against other users in a race to solve coding problems! "/>
          <ProjectComponent name="Mind-Bubble" img={MBDashboard} code="https://github.com/CaptainKurt91/mind-bubble"  live="https://www.mind-bubble.com/"
                            text="Lorem ipsum black faklsjflsadkj ebgbjkab enklakjnsd"/>
          <ProjectComponent name="ClassiCars" img={cc1} code="https://github.com/WillDunwoody/classicars"  live="https://classicars.herokuapp.com/"/>
          <ProjectComponent name="Watch-List" img={wl1} code="https://github.com/WillDunwoody/rails-watch-list"  live="https://mysite-x2vo.onrender.com/"/>
          <ProjectComponent name="Tic-Tac-Toe" img={ttt1} code="https://github.com/WillDunwoody/tic-tac-toe"  live="https://willdunwoody.github.io/tic-tac-toe/"/>
          <ProjectComponent name="Teki" img={TekiDashboard} code="https://github.com/NicFie/Teki"  live="https://teki-tournie.herokuapp.com/dashboard"/>
        </div>
      </div>
    </div>
  )
}
