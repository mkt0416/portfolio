
import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Promotion from './components/Promotion';
import Contact from './components/Contact';
import TopMenuButton from './components/TopMenuButton';
import Footer from './components/Footer';

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Promotion />
      <Contact />
      <TopMenuButton />
      <Footer />
    </div>
  );
};

export default page;