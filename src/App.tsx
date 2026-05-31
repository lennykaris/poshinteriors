import React, { useEffect } from 'react';
import { Cursor } from './components/Cursor';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Portfolio } from './components/Portfolio';
import { Curtains } from './components/Curtains';
import { Services } from './components/Services';
import { Wardrobes } from './components/Wardrobes';
import { PhotoWall } from './components/PhotoWall';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Instagram } from './components/Instagram';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Scroll reveal observer
    const revEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    revEls.forEach((el) => obs.observe(el));

    // Stagger animation on parents' children
    const staggerParents = document.querySelectorAll('.bento, .services-grid, .testi-grid, .process-steps, .stats-bar');
    staggerParents.forEach((parent) => {
      Array.from(parent.children).forEach((child, i) => {
        (child as HTMLElement).style.transitionDelay = `${i * 0.08}s`;
        if (
          !child.classList.contains('reveal') &&
          !child.classList.contains('reveal-left') &&
          !child.classList.contains('reveal-right')
        ) {
          child.classList.add('reveal');
          obs.observe(child);
        }
      });
    });

    return () => {
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <Cursor />
      <WhatsAppFloat />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Portfolio />
      <Curtains />
      <Services />
      <Wardrobes />
      <PhotoWall />
      <Process />
      <Testimonials />
      <Instagram />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
