import { Link } from "react-router-dom"
import Colors from "../../utilities/Color"
import Navbar from "../navbar/Navbar"
import pdf from "../../files/willdunwoodyCV.pdf"
import { useEffect } from "react"
import imgbootstrap from "../../images/languages/img-bootstrap.png"
import imgcss3 from "../../images/languages/img-css3.png"
import imggithub from "../../images/languages/img-github.png"
import imghtml5 from "../../images/languages/img-html5.png"
import imgjavascript from "../../images/languages/img-javascript.png"
import imgpostgresql from "../../images/languages/img-postgresql.png"
import imgrails from "../../images/languages/img-rails.png"
import imgreact from "../../images/languages/img-react.png"
import imgruby from "../../images/languages/img-ruby.png"
import './About.css'

export default function About() {
  useEffect(() => {
    setTimeout(() => {
     document.getElementById('nav-container').style.opacity = 1
    }, 100)
    setTimeout(() => {
     document.getElementById('header-container').style.opacity = 1
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
     document.getElementById('download-container').style.opacity = 1
    }, 1100)
    setTimeout(() => {
     document.getElementById('language-header').style.opacity = 1
    }, 1300)
    // setTimeout(() => {
    //  document.getElementById('html5').style.opacity = 1
    // }, 1500)
    // setTimeout(() => {
    //  document.getElementById('css3').style.opacity = 1
    // }, 1600)
    // setTimeout(() => {
    //  document.getElementById('javascript').style.opacity = 1
    // }, 1700)
    // setTimeout(() => {
    //  document.getElementById('ruby').style.opacity = 1
    // }, 1800)
    // setTimeout(() => {
    //  document.getElementById('rails').style.opacity = 1
    // }, 1900)
    // setTimeout(() => {
    //  document.getElementById('postgresql').style.opacity = 1
    // }, 2000)
    // setTimeout(() => {
    //  document.getElementById('github').style.opacity = 1
    // }, 2100)
    // setTimeout(() => {
    //  document.getElementById('react').style.opacity = 1
    // }, 2200)
    // setTimeout(() => {
    //  document.getElementById('bootstrap').style.opacity = 1
    // }, 2300)
  })

  const languages = [imghtml5, imgcss3, imgjavascript, imgruby, imgrails, imgpostgresql, imggithub, imgreact, imgbootstrap ]
  console.log(languages.map(lang => lang.match(/img-(w+)/)[1]))
  return (
    <div className="home-container">
      <div id="nav-container" className="nav-container trans">
        <Navbar />
      </div>
      <div className="about-left-container">
        <h1 className="about-header trans" id="header-container">About<span className="color-yellow">Me</span></h1>
        <div className="text-container">
          <div className="main-text">
            <p className="trans" id="p-one">My name is Will Dunwoody. Originally from Northern Ireland, currently based in Italy, I enjoy being creative and designing websites and web apps.</p>
            <p className="trans" id="p-two">I am always striving to learn and develop new skills to become a better developer.</p>
            <p className="trans" id="p-three">With a varied background including Drone Pilot, Teacher and Engineer I can create creative, well structured and functional sites.</p>
          </div>
        </div>
        <div className="trans" id="download-container">
          <a className="download-link"
              href={pdf}
              download="willdunwoodyCV.pdf"
              >Download Resume</a>
        </div>
      </div>
      <div className="about-right-container">
        <h2 className="language-header trans" id="language-header" >
          Languages I speak
        </h2>
        <div className="language-text">
          <div className="language-container">
            {languages.map(language => {
              return (
                <img src={language} className="language trans" id={language} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
