import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import Button from '../../Components/Button/Button'

const Home = () => {
  return (
   <>
    <Navbar/>
      <div className="hero-container">
    <div className="hero-content">
      <div className="hero-text">
        <h1 className="hero-heading">Welcome to Our Website</h1>
        <div className="hero-buttons">
          <button className="hero-button">Button 1</button>
          <button className="hero-button">Button 2</button>
        </div>
      </div>
    </div>
  </div>
   </> 
  )
}

export default Home

