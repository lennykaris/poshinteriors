import React from 'react';

const SERVICES_DATA = [
  {
    num: '01',
    title: 'Curtains & Drapes',
    img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    desc: 'Measured, crafted, and installed bespoke window treatments in any fabric, pleat, or track style.',
  },
  {
    num: '02',
    title: 'Full Interior Design',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80',
    desc: 'Concept to completion — mood boards, sourcing, renovation management, and final styling.',
  },
  {
    num: '03',
    title: 'Fitted Wardrobes',
    img: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=80',
    desc: 'Built-in walk-in and sliding door wardrobe systems designed around your space and storage needs.',
  },
  {
    num: '04',
    title: 'Blinds & Shutters',
    img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80',
    desc: 'Roman, roller, venetian, and motorised shutter systems for a clean, contemporary finish.',
  },
  {
    num: '05',
    title: 'Soft Furnishings',
    img: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=900&q=80',
    desc: 'Custom cushions, throws, headboards, and upholstery — coordinated with your window treatments.',
  },
  {
    num: '06',
    title: 'Office Interiors',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    desc: 'Commercial fit-outs that balance brand identity with a space your team actually wants to work in.',
  },
];

export const Services: React.FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="section-header reveal">
        <p className="sec-eyebrow">What We Do</p>
        <h2 className="sec-h2">Every room.<br /><em>Every detail.</em></h2>
      </div>
      <div className="services-grid">
        {SERVICES_DATA.map((svc, idx) => (
          <div key={idx} className="svc reveal">
            <div className="svc-img">
              <img src={svc.img} alt={svc.title} loading="lazy" />
              <div className="svc-num-overlay">{svc.num}</div>
            </div>
            <div className="svc-body">
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-desc">{svc.desc}</p>
              <div className="svc-more">Enquire Now</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
