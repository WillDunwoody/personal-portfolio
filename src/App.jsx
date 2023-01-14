import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/personal-portfolio/" element={<Navigate to="/" replace />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  )
}

export default App
