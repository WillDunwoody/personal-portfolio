import { Link } from "react-router-dom"
import Colors from "../../utilities/Color"
import Navbar from "../navbar/Navbar"
import pdf from "../../files/willdunwoodyCV.pdf"
import { useEffect } from "react"
import './About.css'

export default function About() {
  useEffect(() => {
    setTimeout(() => {
     document.getElementById('nav-container').style.opacity = 1
    }, 100)
    setTimeout(() => {
     document.getElementById('header-container').style.opacity = 1
    }, 400)
    setTimeout(() => {
     document.getElementById('main-text-container').style.opacity = 1
    }, 700)
    setTimeout(() => {
     document.getElementById('language-container').style.opacity = 1
    }, 1000)
    setTimeout(() => {
     document.getElementById('download-container').style.opacity = 1
    }, 1300)
  })

  return (
    <div className="home-container">
      <div id="nav-container" className="about-left-container trans">
        <Navbar />
      </div>
      <div className="about-right-container">
        <div className="text-container">
          <h1 className="header trans" id="header-container">About</h1>
          <p className="main-text trans" id="main-text-container">My name is Will Dunwoody. Originally from Northern Ireland, currently based in Italy, I enjoy being creative and designing websites and web apps.<br /><br />
            I am always striving to learn and develop new skills to become a better developer. <br /><br />
            With a varied background including Drone Pilot, Teacher and Engineer I can create creative, well structured and functional sites.
          </p>
          <div id="language-container" className="trans">
            <h2 className="language-text" style={{color: Colors.ORANGE, fontWeight: 300}}>
              Languages I speak
            </h2>
            <p className="language-text">
              HTML, CSS, Javascript, Ruby on Rails, React.JS, MySQL, PostgreSQL
            </p>
          </div>
        </div>
        <div className="trans" id="download-container">
          <a className="download-link"
              href={pdf}
              download="willdunwoodyCV.pdf"
              >Download Resume</a>
        </div>
      </div>
    </div>
  )
}
