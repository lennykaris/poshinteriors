import React, { useEffect, useState } from 'react';

const HERO_SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    alt: 'Luxury living room',
  },
  {
    url: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    alt: 'Elegant curtains',
  },
  {
    url: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80',
    alt: 'Interior design',
  },
  {
    url: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bedroom design',
  },
];

export const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="hero">
      <div className="hero-slides" id="heroSlides">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-slide ${idx === current ? 'active' : ''}`}
          >
            <img src={slide.url} alt={slide.alt} />
          </div>
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-pill">
          <span className="hero-pill-dot"></span>
          <span>Nairobi's Premier Interior Studio</span>
        </div>
        <h1 className="hero-h1">
          Spaces that<br />
          stop you<br />
          <em>in your tracks.</em>
        </h1>
        <p className="hero-sub">
          Bespoke curtains, full interior transformations, fitted wardrobes — all crafted for how you actually live.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-gold">
            Book Free Consultation
          </a>
          <a href="#portfolio" className="btn-outline-white">
            See Our Work
          </a>
        </div>
      </div>

      {/* Side thumbnails */}
      <div className="hero-thumbs" id="heroThumbs">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-thumb ${idx === current ? 'active' : ''}`}
            onClick={() => goSlide(idx)}
          >
            <img src={slide.url} alt="" />
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-line"></div>
        <span className="hero-scroll-txt">Scroll to explore</span>
      </div>

      {/* Bottom dots */}
      <div className="hero-dots" id="heroDots">
        {HERO_SLIDES.map((_, idx) => (
          <div
            key={idx}
            className={`hero-dot ${idx === current ? 'active' : ''}`}
            onClick={() => goSlide(idx)}
          ></div>
        ))}
      </div>
    </section>
  );
};
