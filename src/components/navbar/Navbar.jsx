
import Colors from '../../utilities/Color'
import { HomeNavComponents, AboutNavComponents } from './NavComponents'
import { faUser, faFolder, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'


function HomeNav(props) {
  return (
    <div id="navbar" className="navbar-home" style={{backgroundColor: Colors.home}}>
      <ul>
        <HomeNavComponents name={props.one} icon={props.oneIcon} />
        <HomeNavComponents name={props.two} icon={props.twoIcon} />
        <HomeNavComponents name={props.three} icon={props.threeIcon} />
      </ul>
    </div>
  )
}

function Navbar() {
  if(window.location.pathname == "/") {
    return <HomeNav one="about" oneIcon={faUser} two="portfolio" twoIcon={faFolder} three="contact" threeIcon={faEnvelope} />
  } else if(window.location.pathname == "/about")  {
    return <HomeNav one="home" oneIcon={faHome} two="portfolio" twoIcon={faFolder} three="contact" threeIcon={faEnvelope} />
  } else if(window.location.pathname == "/portfolio")  {
    return <HomeNav one="home" oneIcon={faHome} two="about" twoIcon={faUser} three="contact" threeIcon={faEnvelope} />
  } else if(window.location.pathname == "/contact")  {
    return <HomeNav one="home" oneIcon={faHome} two="about" twoIcon={faUser} three="portfolio" threeIcon={faFolder} />
  }
}

export default Navbar
