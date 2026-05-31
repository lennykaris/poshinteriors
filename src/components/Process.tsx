import React from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We visit your home or office anywhere in Nairobi at a time that suits you. No fee. No pressure.',
  },
  {
    num: '02',
    title: 'Concept & Quote',
    desc: 'Within 48 hours we send fabric swatches, design references, and a fully itemised quote. No surprises.',
  },
  {
    num: '03',
    title: 'Made to Order',
    desc: 'Your pieces are crafted in our Nairobi workshop. We give you updates and flag any decisions needed.',
  },
  {
    num: '04',
    title: 'Installation',
    desc: 'Our team handles every fitting detail. We leave the space clean, styled, and ready to enjoy that day.',
  },
];

export const Process: React.FC = () => {
  return (
    <section className="process-section" id="process">
      <p className="sec-eyebrow" style={{ color: 'var(--gold)', fontSize: '.6rem', fontWeight: 500, letterSpacing: '.25em', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 2 }}>
        <span style={{ width: '28px', height: '1px', background: 'var(--gold)', display: 'inline-block' }}></span>
        How We Work
      </p>
      <h2 className="sec-h2" style={{ color: '#fff', position: 'relative', zIndex: 2 }}><em>Simple</em> process.<br />Exceptional result.</h2>
      <div className="process-steps">
        {STEPS.map((step, idx) => (
          <div key={idx} className="p-step reveal">
            <div className="p-big-num">{step.num}</div>
            <h3 className="p-title">{step.title}</h3>
            <p className="p-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
