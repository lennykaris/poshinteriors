import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-bg">
        <img src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1400&q=80" alt="" loading="lazy" />
      </div>
      <div className="cta-overlay"></div>
      <div className="cta-inner">
        <h2 className="cta-h2 reveal-left">Your home deserves to feel<br /><em>extraordinary.</em></h2>
        <div className="cta-right reveal-right">
          <div className="cta-phone">
            <small>Call us now</small>
            +254 719 286 449
          </div>
          <a href="#" className="btn-gold" style={{ fontSize: '.65rem', padding: '16px 36px' }}>Book Free Consultation</a>
          <a href="https://wa.me/254719286449" className="wa-cta" target="_blank" rel="noopener noreferrer">
            <span className="wa-dot-big"></span> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
