import React from 'react';

export const Curtains: React.FC = () => {
  return (
    <section className="curtains-hero" id="curtains">
      <div className="ch-bg">
        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1800&q=80" alt="Curtains" loading="lazy" />
      </div>
      <div className="ch-overlay"></div>
      <div className="ch-content reveal-left">
        <p className="ch-eyebrow">Our Signature Craft</p>
        <h2 className="ch-h2">Curtains<br /><em>built for<br />your windows.</em></h2>
        <p className="ch-body">Measured on-site, made in our Nairobi workshop. Every fold, lining, and track is chosen with your light and lifestyle in mind.</p>
        <div className="ch-swatches">
          <div className="swatch">
            <div className="swatch-circle" style={{ background: '#D4C5A9' }}></div>
            <div className="swatch-name">Belgian Linen</div>
          </div>
          <div className="swatch">
            <div className="swatch-circle" style={{ background: '#1C1712' }}></div>
            <div className="swatch-name">Blackout</div>
          </div>
          <div className="swatch">
            <div className="swatch-circle" style={{ background: '#E8E0D0', border: '1px solid rgba(255,255,255,.2)' }}></div>
            <div className="swatch-name">Sheer Voile</div>
          </div>
          <div className="swatch">
            <div className="swatch-circle" style={{ background: '#6B4C3B' }}></div>
            <div className="swatch-name">Velvet</div>
          </div>
          <div className="swatch">
            <div className="swatch-circle" style={{ background: '#C9A84C' }}></div>
            <div className="swatch-name">Dupioni Silk</div>
          </div>
        </div>
        <a href="#contact" className="btn-gold">Request Fabric Samples</a>
      </div>
      <div className="ch-cards">
        <div className="ch-card">
          <div className="ch-card-img">
            <img src="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80" alt="Wave fold" loading="lazy" />
          </div>
          <div className="ch-card-name">Wave Fold</div>
          <div className="ch-card-desc">Contemporary · Clean</div>
        </div>
        <div className="ch-card">
          <div className="ch-card-img">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80" alt="Pinch pleat" loading="lazy" />
          </div>
          <div className="ch-card-name">Pinch Pleat</div>
          <div className="ch-card-desc">Classic · Formal</div>
        </div>
        <div className="ch-card">
          <div className="ch-card-img">
            <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80" alt="Eyelet" loading="lazy" />
          </div>
          <div className="ch-card-name">Eyelet</div>
          <div className="ch-card-desc">Casual · Modern</div>
        </div>
      </div>
    </section>
  );
};
