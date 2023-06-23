import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { ImLocation } from 'react-icons/im';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';

function Contact() {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className='contact-cont'>
    <section>
        <div className="content">
        <h1>CONTACT US</h1>
        <h4> <HashLink smooth to='/#'>HOME</HashLink> | CONTACT US </h4>
        </div>
      </section>

      <div className="contact-main">
        <div className="wrapper">
          <div className="details">

              <div className="cards">
                <IoMdCall className='icons' title="Telephone" />
                <h2>PHONE NUMBER</h2>
                <p>+254 752634175</p>
              </div>

        <div className="cards">
          <ImLocation className='icons' />
          <h2>OUR MAIN OFFICE</h2>
          <p>Smile Pro Clinic, Kakamega, 50100</p>
        </div>

        <div className="cards">
          <AiOutlineMail className='icons' />
          <h2>EMAIL</h2>
          <p>info@smileproclinic.com</p>
        </div>

        <div className="cards">
          <AiOutlineWhatsApp className='icons' />
          <h2>WHATSAPP</h2>
          <p>+254 714256396</p>
        </div>

          </div>

        <div className="form">
          <h2>BOOK AN APPOINTMENT TODAY!</h2>

            <input type="text" value={firstName} placeholder='Name' onChange={(e) => setFirstName(e.target.value)} />

            <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

            <textarea cols="30" rows="10" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} />

            <button>SUBMIT</button>
        </div>

        </div>
      </div>

    </div>
  )
}

export default Contact;