import React from 'react';
import { HashLink } from 'react-router-hash-link';

function About() {
  return (
    <div className='about-cont'>
      <section>
        <div className="content">
        <h1>ABOUT US</h1>
        <h4> <HashLink smooth to='/#'>HOME</HashLink> | ABOUT US </h4>
        </div>
      </section>

      <div className="about-main">

          <h2>OUR HISTORY</h2>
          <p>At Smile Pro Clinic, our journey began over a decade ago when Dr. John Smith and Dr. Sarah Johnson, both accomplished dentists, shared a common vision of creating a dental practice that would provide exceptional care to the community. Since our establishment in 2011, we have been dedicated to serving our patients with the highest standards of dental excellence. Over the years, our practice has grown, allowing us to expand our services, invest in advanced technology, and assemble a team of skilled professionals who share our commitment to exceptional dentistry.</p>

          <h2>MISSION</h2>
          <p>Our mission at Smile Pro Clinic is to deliver comprehensive dental care that enhances the oral health and overall well-being of our patients. We strive to create a positive and comfortable dental experience, where each patient is treated with compassion, respect, and individualized attention. Through continuous education, advanced techniques, and personalized treatment plans, we aim to empower our patients to achieve optimal oral health and maintain beautiful smiles for a lifetime.</p>

          <h2>VISION</h2>
          <p>Our vision at Smile Pro Clinic is to be a leading dental practice, renowned for our clinical excellence, patient-centered approach, and commitment to advancing the field of dentistry. We envision a future where every individual can access the highest quality dental care in a warm and welcoming environment. We aspire to continuously innovate and adopt the latest advancements in dental technology to provide our patients with exceptional results and the utmost satisfaction.</p>

          <h2>WHY CHOOSE US?</h2>
          <div className="choose">

          <div className="back">
            <h2>Expertise And Experience</h2>
            <p>Years of experience, skilled professionals. Top-quality dental care for optimal oral health.</p>
          </div>

          <div className="back">
            <h2>Comprehensive Services</h2>
            <p>Preventive, cosmetic, restorative dentistry. All your dental needs under one roof.</p>
          </div>

          <div className="back">
            <h2>Personalized Approach</h2>
            <p>Tailored care for unique requirements. Customized treatment plans, prioritizing oral health goals.</p>
          </div>

          <div className="back">
            <h2>Advanced Technology</h2>
            <p>Latest dental technology and techniques. Precise diagnoses, efficient treatments, exceptional outcomes.</p>
          </div>

          <div className="back">
            <h2>Convenience</h2>
            <p>Relaxing environment, friendly staff. Flexible scheduling, convenient amenities.</p>
          </div>

          <div className="back">
            <h2>Patient Education</h2>
            <p>Empowering with knowledge. Understand oral health, treatment options, preventive measures.</p>
          </div>

          </div>


      </div>

    </div>
  )
}

export default About;