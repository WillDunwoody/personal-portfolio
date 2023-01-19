import { Link, Route, Routes, } from 'react-router-dom'
import Colors from '../../utilities/Color'
import { faUser, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function changeColor(color) {
  document.getElementById('navbar').style.backgroundColor = color.color
  if (color.element !== undefined) {
    let element = document.getElementById(color.element)
    element.style.opacity = 1
    element.style.zIndex = 10
  }
}

function removeColor(color) {
  document.getElementById('navbar').style.backgroundColor = color.color
  let element = document.getElementById(color.element)
  if (element !== null) {
    element.style.zIndex = -10
    element.style.opacity = 0
  }
}

function homeNav() {
  return (
    <div id="navbar" className="navbar-home" style={{backgroundColor: Colors.YELLOW}}>
      <ul>
        <li id="about"
            onMouseEnter={(event) => changeColor({color: Colors.ORANGE, element:'about-background'})}
            onMouseLeave={(event) => removeColor({color: Colors.YELLOW, element:'about-background'})}
            className="list-items-home">
          <Link  to="/about"><FontAwesomeIcon icon={faUser} style={{color: Colors.BLUE}} /></Link>
          <div className='link-items-home' id="about-background" style={{backgroundColor: Colors.ORANGE}}>
            <Link to="/about" style={{color: Colors.BLUE}}
                  onMouseEnter={(event) => changeColor({color: Colors.ORANGE, element:'about-background'})}
                  onMouseLeave={(event) => removeColor({color: Colors.YELLOW, element: 'about-background'})}>About</Link>
          </div>
        </li>

        <li id="portfolio"
            onMouseEnter={(event) => changeColor({color: Colors.RED, element:'portfolio-background'})}
            onMouseLeave={(event) => removeColor({color: Colors.YELLOW, element:'portfolio-background'})}
            className="list-items-home">
          <Link to="/portfolio"><FontAwesomeIcon icon={faFolder} style={{color: Colors.BLUE}} /></Link>
          <div className='link-items-home' id="portfolio-background" style={{backgroundColor: Colors.RED}}>
            <Link to="/portfolio" style={{color: Colors.BLUE}}
                  onMouseEnter={(event) => changeColor({color: Colors.RED, element:'portfolio-background'})}
                  onMouseLeave={(event) => removeColor({color: Colors.YELLOW, element:'portfolio-background'})}>Portfolio</Link>
          </div>
        </li>

        <li id="contact"
            onMouseEnter={(event) => changeColor({color: Colors.GREEN, element:'contact-background'})}
            onMouseLeave={(event) => removeColor({color: Colors.YELLOW, element:'contact-background'})}
            className="list-items-home">
          <Link to="/contact"><FontAwesomeIcon icon={faEnvelope} style={{color: Colors.BLUE}} /></Link>
          <div className='link-items-home' id="contact-background" style={{backgroundColor: Colors.GREEN}}>
            <Link to="/contact" style={{color: Colors.BLUE}}
                  onMouseEnter={(event) => changeColor({color: Colors.GREEN, element:'contact-background'})}
                  onMouseLeave={(event) => removeColor({color: Colors.YELLOW, element:'contact-background'})}>Contact</Link>
          </div>
        </li>
      </ul>
    </div>
  )
}

function otherNav() {
  return (
    <div className='navcontainer'>
      <div className="nav-top-container"></div>
      <div id="navbar" className="navbar" style={{backgroundColor: Colors.ORANGE}}>
        <ul>
          <li id="home">
              <Link to="/" style={{color: Colors.BLUE}}
                    onMouseEnter={(event) => changeColor({color: Colors.YELLOW})}
                    onMouseLeave={(event) => removeColor({color: Colors.ORANGE})}>Home</Link>
          </li>

          <li id="portfolio">
              <Link to="/portfolio" style={{color: Colors.BLUE}}
                    onMouseEnter={(event) => changeColor({color: Colors.RED})}
                    onMouseLeave={(event) => removeColor({color: Colors.ORANGE})}>Portfolio</Link>
          </li>

          <li id="contact">
              <Link to="/contact" style={{color: Colors.BLUE}}
                    onMouseEnter={(event) => changeColor({color: Colors.GREEN})}
                    onMouseLeave={(event) => removeColor({color: Colors.ORANGE})}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

function Navbar() {
  if(window.location.pathname == "/") {
    return homeNav()
  } else if(window.location.pathname == "/about") {
    return otherNav()
  }
}

export default Navbar
