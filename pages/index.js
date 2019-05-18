import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';

const images = [
  'https://res.cloudinary.com/dd8c1nipl/image/upload/v1558212779/wof/hero.jpg',
  'https://res.cloudinary.com/dd8c1nipl/image/upload/v1558212781/wof/hero_2x.jpg',
];

const Index = () => (
  <section>
    <Hero images={images} />
    <Header pathname="/blog" />
  </section>
);

export default Index;
