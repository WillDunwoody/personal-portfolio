import { Link, Route, Routes, } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Colors from '../../utilities/Color'
import { HomeNavComponents } from './NavComponents'
import { faUser, faFolder, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const showLink = (id) => {
  let doc = document.getElementById(id)
  doc.style.opacity = 1
  doc.style.zIndex = 10
}

const removeLink = (id) => {
  let doc = document.getElementById(id)
  doc.style.opacity = 0
  doc.style.zIndex = -100
}


export default function HomeNav() {
  return (
    <div id="navbar" className="navbar" style={{backgroundColor: Colors.home}}>
      <ul className='nav-list'>
        <HomeNavComponents name="home" icon={faHome} />
        <HomeNavComponents name="about" icon={faUser} />
        <HomeNavComponents name="portfolio" icon={faFolder} />
        {/* <HomeNavComponents name="contact" icon={faEnvelope} /> */}
      </ul>
    </div>
  )
}
