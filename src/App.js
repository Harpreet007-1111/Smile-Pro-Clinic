import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Fade } from 'react-reveal';

function App() {

  return (
    <Router>
      <Navbar />

      <section id='#'>
        <Fade>
          <Home />
        </Fade>
      </section>

      <section id="about">
        <Fade>
          <About />
        </Fade>
      </section>

      <section id="services">
        <Fade>
          <Services />
        </Fade>
      </section>

      <section id="test">
        <Fade>
          <Testimonials />
        </Fade>
      </section>

      <section id="gallery">
        <Fade bottom>
          <Gallery />
        </Fade>
      </section>


      <section id='contact'>
        <Fade>
          <Contact />
        </Fade>
      </section>

      <Footer />

    </Router>
  );
}

export default App;
