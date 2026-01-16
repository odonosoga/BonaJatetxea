import React from 'react';
import Carousel from './carousel/carousel';
import About from './about/about';
import Testimonials from './testimonials/testimonials';
import CTA from './cta/cta';

const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
