import React from 'react'
import './ResumeBuilder.css'
import RB from '../../Images/ResumeBuilder.png'

const ResumeBuilder = () => {
  return (
    <>
        <div className="container">
          <div className="content">
              <div className="left-content">
                <h1 className="heading">Resume Builder</h1>
                <p className="paragraph">Create a professional and compelling resume that <br/>showcases your skills and experiences. Our user-friendly <br/>builder guides you through the process, ensuring your <br/>resume stands out.</p>
                <button className="button">Learn More</button>
              </div>
              <div className="right-content">
                <img src={RB} alt='' className="image" />
              </div>
          </div>
        </div>
    </>
  )
}

export default ResumeBuilder
