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
     document.getElementById('header-container').style.opacity = 0.2
    }, 300)
    setTimeout(() => {
     document.getElementById('p-one').style.opacity = 1
    }, 500)
    setTimeout(() => {
     document.getElementById('p-two').style.opacity = 1
    }, 700)
    setTimeout(() => {
     document.getElementById('p-three').style.opacity = 1
    }, 900)
    setTimeout(() => {
     document.getElementById('language-container').style.opacity = 1
    }, 1100)
    setTimeout(() => {
     document.getElementById('download-container').style.opacity = 1
    }, 1300)
  })

  return (
    <div className="home-container">
      <div id="nav-container" className="nav-container trans">
        <Navbar />
      </div>
      <div className="right-container">
        <div className="text-container">
          <h1 className="header trans" id="header-container">About</h1>
          <div className="main-text">
            <p className="trans" id="p-one">My name is Will Dunwoody. Originally from Northern Ireland, currently based in Italy, I enjoy being creative and designing websites and web apps.</p>
            <p className="trans" id="p-two">I am always striving to learn and develop new skills to become a better developer.</p>
            <p className="trans" id="p-three">With a varied background including Drone Pilot, Teacher and Engineer I can create creative, well structured and functional sites.</p>
          </div>
          <div id="language-container" className="trans">
            <h2 className="language-text color-yellow" >
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
