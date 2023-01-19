import Navbar from '../navbar/Navbar'
import Colors from '../../utilities/Color'
import { useEffect } from 'react'
import './Home.css'


export default function Home() {
  useEffect(() => {
    setTimeout(() => {
     document.getElementById('nav-container').style.opacity = 1
    }, 100)
    setTimeout(() => {
     document.getElementById('right-container').style.opacity = 1
    }, 400)
    setTimeout(() => {
     document.getElementById('left-container').style.opacity = 1
    }, 700)
  })

  return (
    <div className="home-container">
      <div id="nav-container" className='nav-container'>
        <Navbar />
      </div>
      <div id='left-container' className="left-container">
        <div className='text-container'>
          <h3 className='hello-world'>HELLO WORLD,</h3>
          <h1 className='im-will'>I’m<span style={{color: Colors.YELLOW}}>Will.</span></h1>
          <h4 className="fullstack-container" style={{backgroundColor: Colors.YELLOW, color: Colors.BLUE }}>Full Stack Developer</h4>
        </div>
      </div>
      <div id= "right-container" className="right-container"></div>
    </div>
  )
}
