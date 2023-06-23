import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Testimonials() {

  const reviews = [
    {
      id: 1,
      image: '/Assets/Max.jpg',
      name: 'Max Hopper',
      subtitle: "I had an absolutely amazing experience at Smile Pro Clinic. From the moment I walked in, the staff greeted me with warm smiles and made me feel comfortable. The level of care and attention I received was truly exceptional."
    },
    {
      id: 2,
      image: '/Assets/Janes.jpg',
      name: 'Jane Danver',
      subtitle: 'Smile Pro Clinic provided me with a great dental experience. The dentists were knowledgeable, and the atmosphere was welcoming. I am very satisfied with their service.'
    },
    {
      id: 3,
      image: '/Assets/leo.jpg',
      name: 'Leo Dicaprio',
      subtitle: "I am thrilled with the fantastic results I achieved at Smile Pro Clinic. The dentists' expertise and attention to detail transformed my smile. I highly recommend their services."
    },
    {
      id: 4,
      image: '/Assets/Lily.jpg',
      name: 'Lily Potter',
      subtitle: "The team at Smile Pro Clinic is highly professional. They made me feel comfortable during my visit, providing thorough explanations and delivering excellent care. I am grateful for their expertise."
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0);
  const review = reviews[currentSlide];

  const handlePrev = () => {
      if(currentSlide !== 0) {
        setCurrentSlide(currentSlide - 1);
      } else {
        setCurrentSlide(reviews.length - 1);
      }
  }

  const handleNext = () => {
    if(currentSlide !== reviews.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  }

  return (
    <div className='test-cont'>
      <section>
        <div className="content">
          <h1>OUR TESTIMONIALS</h1>
          <h4> <HashLink smooth to='/#'>HOME</HashLink> | OUR TESTIMONIALS </h4>
        </div>
      </section>

      <div className="test-main">

        <div className="reviews" key={review.id}>
          <div className="prev">
            <AiOutlineArrowLeft className='icons' onClick={() => handlePrev()} />
          </div>
          <img src={review.image} alt={review.name} />
          <h2>{review.name}</h2>
          <FaQuoteLeft className='quotes' />
          <p>{review.subtitle}</p>
          <FaQuoteRight className='quotes' />
          <div className="next">
            <AiOutlineArrowRight className='icons' onClick={() => handleNext()} />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Testimonials;