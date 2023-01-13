import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  )
}

export default App
