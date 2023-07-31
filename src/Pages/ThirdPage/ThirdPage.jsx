import React from 'react'
import './ThirdPage.css'

const ThirdPage = () => {
  return (
    <>
       <div className='thirdpage'>
        <h1>A platform you can trust</h1>
        <div className="cards-container">
          <div className="card">
            {/* Content of Card 1 */}
            <h2>We use https with 256-bit encryption</h2>
            <p>Rest assured that when you use HireMe, your data and personal information are handled with the utmost care and security. Your privacy and peace of mind are our top priorities.</p>
          </div>
          <div className="card">
            {/* Content of Card 2 */}
            <h2>Be at ease with our two-factor verification system.</h2>
            <p>With our two-factor verification system, you can have peace of mind knowing that even if someone gains access to your login credentials, they won't be able to access your account without the secondary verification code.</p>
          </div>
          <div className="card">
            {/* Content of Card 3 */}
            <h2>We promote user data privacy, we do not sell your data.</h2>
            <p>We are committed to maintaining the confidentiality and security of the information you entrust to us. We want you to feel confident that your personal data is protected and will not be sold or shared with any third parties without your explicit consent.</p>
          </div>
          <div className="card">
            {/* Content of Card 4 */}
            <h2>All our partner platforms have top-level security</h2>
            <p>We prioritize the security of our users' data not only within our platform but also with our partner platforms. We understand the importance of maintaining a secure environment throughout the entire recruitment process.</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default ThirdPage
