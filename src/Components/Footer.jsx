import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaSnapchat } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="about">
        <h2>ABOUT US</h2>
        <p>We look forward to serving you and providing the best dental care experience. Contact us today to schedule an appointment or for any inquiries.</p>
      </div>

      <div className="open">
        <h2>OPENING HOURS</h2>
          <p>Monday - Friday: 8:00am - 5:00pm</p>
          <p>Saturday: 9:00am - 2:00pm</p>
          <p>Sunday: Closed</p>
      </div>

      <div className="social">
        <h2>STAY CONNECTED</h2>
        <BsFacebook className='icons' />
        <AiFillInstagram className='icons' />
        <AiOutlineTwitter className='icons' />
        <FaSnapchat className="icons" />
      </div>

    </footer>
  )
}

export default Footer;