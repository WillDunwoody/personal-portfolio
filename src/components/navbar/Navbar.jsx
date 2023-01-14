import { Link, Route, Routes } from 'react-router-dom'
import Colors from '../../utilities/Color'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar" style={{backgroundColor: Colors.YELLOW}}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}
