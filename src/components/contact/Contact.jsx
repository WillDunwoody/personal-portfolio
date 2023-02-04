import './Contact.css'
import Navbar from '../navbar/Navbar'
import { useEffect } from 'react'

export default function  Contact() {
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
      <h1>Portfolio</h1>
    </div>
  </div>
    )
}
