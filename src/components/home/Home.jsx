import Navbar from '../navbar/Navbar'
import Colors from '../../utilities/Color'
import './Home.css'

export default function Home() {
  return (
    <div className="home-container">
      <div className='nav-container'>
        <Navbar />
      </div>
      <div className="left-container">
        <div className='text-container'>
          <h3 className='hello-world'>HELLO WORLD,</h3>
          <h1 className='im-will'>I’m<span style={{color: Colors.YELLOW}}>Will.</span></h1>
          <h4 className="fullstack-container" style={{backgroundColor: Colors.YELLOW, color: Colors.BLUE }}>Full Stack Developer</h4>
        </div>
      </div>
      <div className="right-container"></div>
    </div>
  )
}
