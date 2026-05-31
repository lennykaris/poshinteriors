import React from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=1200&q=80',
];

export const Instagram: React.FC = () => {
  return (
    <section className="insta-section">
      <div className="insta-header reveal">
        <div className="insta-handle">Follow our work <span>@poshinteriors.ke</span></div>
        <a href="#" className="btn-gold" style={{ fontSize: '.6rem', padding: '12px 24px' }}>Follow on Instagram</a>
      </div>
      <div className="insta-grid">
        {IMAGES.map((src, idx) => (
          <div key={idx} className="insta-item">
            <img src={src} alt="" loading="lazy" />
            <div className="insta-overlay">
              <div className="insta-icon">♥</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
