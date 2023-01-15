import { Link, Route, Routes } from 'react-router-dom'
import Colors from '../../utilities/Color'
import { faUser, faFolder, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function changeColor(color) {
  document.getElementById('navbar').style.backgroundColor = color.color
  let bgcolor = document.getElementById(color.bgcolor)
  bgcolor.style.backgroundColor = color.color
  bgcolor.style.zIndex = 10
}

function removeColor(color) {
   document.getElementById('navbar').style.backgroundColor = Colors.YELLOW
   let bgcolor = document.getElementById(color)
   bgcolor.style.zIndex = -10
   bgcolor.style.backgroundColor = Colors.BLUE
}

function Navbar() {
  return (
    <div id="navbar" className="navbar" style={{backgroundColor: Colors.YELLOW}}>
      <ul>
        <li id="about"
            onMouseEnter={(event) => changeColor({color: Colors.ORANGE, bgcolor:'about-background'})}
            onMouseLeave={(event) => removeColor('about-background')}
            className="list-items">
          <FontAwesomeIcon icon={faUser} style={{color: Colors.BLUE}} />
          <div className='link-items' id="about-background">
            <Link to="/about" style={{color: Colors.BLUE}}
                  onMouseEnter={(event) => changeColor({color: Colors.ORANGE, bgcolor:'about-background'})}
                  onMouseLeave={(event) => removeColor('about-background')}>About</Link>
          </div>
        </li>

        <li id="portfolio"
            onMouseEnter={(event) => changeColor({color: Colors.RED, bgcolor:'portfolio-background'})}
            onMouseLeave={(event) => removeColor('portfolio-background')}
            className="list-items">
          <FontAwesomeIcon icon={faFolder} style={{color: Colors.BLUE}} />
          <div className='link-items' id="portfolio-background">
            <Link to="/portfolio" style={{color: Colors.BLUE}}
                  onMouseEnter={(event) => changeColor({color: Colors.RED, bgcolor:'portfolio-background'})}
                  onMouseLeave={(event) => removeColor('portfolio-background')}>Portfolio</Link>
          </div>
        </li>

        <li id="contact"
            onMouseEnter={(event) => changeColor({color: Colors.GREEN, bgcolor:'contact-background'})}
            onMouseLeave={(event) => removeColor('contact-background')}
            className="list-items">
          <FontAwesomeIcon icon={faEnvelope} style={{color: Colors.BLUE}} />
          <div className='link-items' id="contact-background">
            <Link to="/contact" style={{color: Colors.BLUE}}
                  onMouseEnter={(event) => changeColor({color: Colors.GREEN, bgcolor:'contact-background'})}
                  onMouseLeave={(event) => removeColor('contact-background')}>Contact</Link>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
