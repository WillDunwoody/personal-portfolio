import { Link, Route, Routes, } from 'react-router-dom'
import Colors from '../../utilities/Color'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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
    element.style.zIndex = -100
    element.style.opacity = 0
  }
}

export function HomeNavComponents(props) {
  return (
    <li className='nav-list-items'>
      <div className="icon-container"
        onMouseEnter={(event) => changeColor({color: Colors.home, element:`${props.name}-background`})}
        onMouseLeave={(event) => removeColor({color: Colors.home, element: `${props.name}-background`})}
      >
        <Link  to={props.name == "home" ? "/" : `/${props.name}`}><FontAwesomeIcon icon={props.icon} style={{color: Colors.BLUE}} /></Link>
      </div>
      <div className='link-container' id={`${props.name}-background`}>
        <Link to={props.name == "home" ? "/" : `/${props.name}`}
              onMouseEnter={(event) => changeColor({color: Colors.home, element:`${props.name}-background`})}
              onMouseLeave={(event) => removeColor({color: Colors.home, element: `${props.name}-background`})}>{Capitalize(props.name)}</Link>
      </div>
    </li>
  )
}
