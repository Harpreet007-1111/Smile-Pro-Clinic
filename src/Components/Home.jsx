import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Home() {

  return (
    <div className='home-cont'>
      <div className="home-main">
      <h1>Your Journey to a Healthy, Radiant Smile Starts Here</h1>
      <p>At Smile Pro Clinic, we believe that a healthy smile is the key to confidence and overall well-being. Whether you need preventive care, cosmetic enhancements, or restorative treatments, our team is ready to guide you on your journey to a beautiful smile. We invite you to schedule an appointment today and experience the exceptional dental care and personalized attention that sets us apart.</p>
        <button><HashLink smooth to='/#contact'>BOOK AN APPOINTMENT</HashLink></button>
      </div>
    </div>
  )
}

export default Home;