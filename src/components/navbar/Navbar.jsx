
import Colors from '../../utilities/Color'
import { HomeNavComponents, AboutNavComponents } from './NavComponents'
import { faUser, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'


function homeNav() {
  return (
    <div id="navbar" className="navbar-home" style={{backgroundColor: Colors.home}}>
      <ul>
        <HomeNavComponents name="about" icon={faUser} />
        <HomeNavComponents name="portfolio" icon={faFolder} />
        <HomeNavComponents name="contact" icon={faEnvelope} />
      </ul>
    </div>
  )
}

function AboutNav(props) {
  return (
    <div className='navcontainer'>
      <div className="nav-top-container"></div>
      <div id="navbar" className="navbar" style={{backgroundColor: Colors[props.current]}}>
        <ul>
          <AboutNavComponents name="home" current={props.current}/>
          <AboutNavComponents name={props.one} current={props.current}/>
          <AboutNavComponents name={props.two} current={props.current}/>
        </ul>
      </div>
    </div>
  )
}

function Navbar() {
  if(window.location.pathname == "/") {
    return homeNav()
  } else if(window.location.pathname == "/about")  {
    return <AboutNav one="portfolio" two="contact" current="about" />
  } else if(window.location.pathname == "/portfolio")  {
    return <AboutNav one="about" two="contact" current="portfolio" />
  }
}

export default Navbar
