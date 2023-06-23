import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Fade } from 'react-reveal'

function Gallery() {

  const people = [
    { id: 1, image: '/Assets/Diana.jpg' },
    { id: 2, image: '/Assets/Thomas.jpg' },
    { id: 3, image: '/Assets/bobby.jpg' },
    { id: 4, image: '/Assets/millie.jpg' },
    { id: 5, image: '/Assets/peter.jpg' },
    { id: 6, image: '/Assets/sunny.jpg' },
    { id: 7, image: '/Assets/tom.jpg' },
    { id: 8, image: '/Assets/martin.jpg' },
    { id: 9, image: '/Assets/mike.jpg' },
  ]

  return (
    <div className='gallery-cont'>
    <section>
        <div className="content">
        <h1>OUR GALLERY</h1>
        <h4> <HashLink smooth to='/#'>HOME</HashLink> | OUR GALLERY </h4>
        </div>
      </section>

    <main className="gallery-main">
      <Fade bottom>
    {people.map((item) => (
          <img key={item.id} src={item.image} alt={item.id} />
        ))}
        </Fade>
    </main>
    </div>
  )
}

export default Gallery;