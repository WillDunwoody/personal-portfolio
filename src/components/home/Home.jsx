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
     document.getElementById('home-right-container').style.opacity = 1
    }, 400)
    setTimeout(() => {
     document.getElementById('hello').style.opacity = 1
    }, 700)
    setTimeout(() => {
      document.getElementById('im-will').style.opacity = 1
    }, 1000);
    setTimeout(() => {
      document.getElementById('fullstack').style.opacity = 1
    }, 1300);
  })

  return (
    <div className="home-container">
      <div id="nav-container" className='nav-container trans'>
        <Navbar />
      </div>
      <div id='home-left-container' className='home-left-container'>
        <div className='text-container'>
          <h3 className='hello-world trans' id="hello">HELLO WORLD,</h3>
          <h1 className='im-will trans' id='im-will'>I’m<span style={{color: Colors.home}}>Will.</span></h1>
          <h4 className="fullstack-container trans" id='fullstack' style={{backgroundColor: Colors.home, color: Colors.BLUE }}>Full Stack Developer</h4>
        </div>
      </div>
      <div id= "home-right-container" className="home-right-container"></div>
    </div>
  )
}
