import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="about-intro">
      <div className="ai-left reveal-left">
        <p className="ai-eyebrow">Who We Are</p>
        <h2 className="ai-h2">We don't decorate.<br />We <em>transform.</em></h2>
        <p className="ai-body">Since 2018, Posh Interiors has been changing how Nairobi homes and offices feel. Every project begins with listening — to you, your lifestyle, your space. Then we bring in the craftsmanship.</p>
        <a href="#services" className="btn-gold" style={{ alignSelf: 'flex-start' }}>Explore Services</a>
      </div>
      <div className="ai-right">
        <div className="ai-img">
          <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80" alt="Interior design" loading="lazy" />
        </div>
        <div className="ai-img">
          <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=80" alt="Wardrobe" loading="lazy" />
        </div>
        <div className="ai-img">
          <img src="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80" alt="Curtains" loading="lazy" />
        </div>
      </div>
    </section>
  );
};
