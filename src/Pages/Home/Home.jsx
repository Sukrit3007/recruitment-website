import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
   <>
    <Navbar/>
      <div className="hero-container">
    <div className="hero-content">
      <div className="hero-text">
        <h1 className="hero-heading">Unlock Your Potential <br/> with HireMe Exciting <br/>Career Opportunities</h1>
        <div className="hero-buttons">
          <button className="hero-button">For Employers</button>
          <button className="hero-button">For Candidates</button>
        </div>
      </div>
    </div>
  </div>
   </> 
  )
}

export default Home

