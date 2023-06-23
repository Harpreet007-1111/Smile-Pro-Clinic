import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Fade } from 'react-reveal';

function Services() {

  const data = [
    {
      id: 1,
      image: '/Assets/dental-care.svg',
      title: 'Dental Care',
      subtitle: 'Experience comprehensive dental care tailored to your unique needs. Our team of skilled professionals is dedicated to providing preventive, restorative, and cosmetic treatments to ensure your oral health is at its best.'
    },
    {
      id: 2,
      image: '/Assets/dentist.svg',
      title: 'Oral Surgery',
      subtitle: 'Trust our expert oral surgeons for safe and efficient procedures. From wisdom tooth extraction to jaw surgery, we offer advanced techniques and compassionate care to improve your oral function and overall well-being.'
    },
    {
      id: 3,
      image: '/Assets/implant.svg',
      title: 'Implants',
      subtitle: 'Regain confidence with dental implants. Our high-quality implant solutions provide a natural-looking and durable replacement for missing teeth, restoring your smile and enhancing your ability to eat and speak comfortably.'
    },
    {
      id: 4,
      image: '/Assets/crown.svg',
      title: 'Crowns',
      subtitle: 'Restore damaged teeth with custom-made dental crowns. Our strong and aesthetically pleasing crowns are designed to blend seamlessly with your natural teeth, providing strength, protection, and a beautiful smile.'
    },
    {
      id: 5,
      image: '/Assets/emergency.svg',
      title: 'Emergency Care',
      subtitle: "When dental emergencies strike, we're here for you. Our skilled team offers prompt and compassionate care for dental injuries, severe toothaches, and other urgent concerns to relieve your pain and address the issue promptly."
    },
    {
      id: 6,
      image: '/Assets/extraction.svg',
      title: 'Extraction',
      subtitle: 'If a tooth is severely damaged or causing oral health problems, extraction may be necessary. Our experienced dentists ensure a comfortable and efficient extraction procedure to improve your overall oral health.'
    },
  ]

  return (
    <div className='services-cont'>
    <section>
        <div className="content">
        <h1>OUR SERVICES</h1>
        <h4> <HashLink smooth to='/#'>HOME</HashLink> | OUR SERVICES </h4>
        </div>
      </section>

      <main className="services-main">

        {data.map(item => {
          return (
            <Fade left>
            <div className="cards" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
            </Fade>
          )
        })}

      </main>

    </div>
  )
}

export default Services;