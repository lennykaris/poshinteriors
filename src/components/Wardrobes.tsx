import React from 'react';

const WARDROBE_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80', alt: 'Wardrobe 1' },
  { src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=80', alt: 'Wardrobe 2' },
  { src: 'https://images.unsplash.com/photo-1594226801341-41427b4e5c22?auto=format&fit=crop&w=900&q=80', alt: 'Wardrobe 3' },
];

export const Wardrobes: React.FC = () => {
  return (
    <section className="wardrobes-split" id="wardrobes">
      <div className="ws-imgs">
        {WARDROBE_IMAGES.map((img, idx) => (
          <div key={idx} className="ws-img">
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
      <div className="ws-content">
        <p className="sec-eyebrow" style={{ color: 'var(--gold)', fontSize: '.6rem', fontWeight: 500, letterSpacing: '.25em', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ width: '28px', height: '1px', background: 'var(--gold)', display: 'inline-block' }}></span>
          Fitted Wardrobes
        </p>
        <h2 className="ws-h2 reveal-right">Storage that<br /><em>doesn't look<br />like storage.</em></h2>
        <p className="ws-body">Walk-in systems, sliding door wardrobes, and built-in cabinetry — all designed around the exact dimensions and needs of your space. No off-the-shelf compromises.</p>
        <ul className="ws-features">
          <li>Full walk-in wardrobe design & installation</li>
          <li>Sliding & hinged door systems</li>
          <li>Custom lighting integrated into cabinetry</li>
          <li>Shoe racks, pull-out drawers, tie rails</li>
          <li>5-year installation guarantee</li>
        </ul>
        <a href="#contact" className="btn-gold" style={{ alignSelf: 'flex-start' }}>Get a Quote</a>
      </div>
    </section>
  );
};
