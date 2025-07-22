 import React from 'react';

import Header from '../Components/Header';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Project from '../Components/Project';
import Services from '../Components/Services';
import Skills from '../Components/Skills';
import Testimonial from '../Components/Testimonial';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Project />
      <Services />
      <Skills />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
