import React from 'react';

const REVIEWS = [
  {
    initials: 'AW',
    name: 'Amina Waweru',
    loc: 'Karen, Nairobi',
    quote: "The curtains changed the entire atmosphere of our sitting room. The fabric suggestion they made was something I'd never have found on my own — and the installation was immaculate.",
  },
  {
    initials: 'JO',
    name: 'James Odhiambo',
    loc: 'Westlands, Nairobi',
    quote: "We hired Posh Interiors for our entire office fit-out. Every space arrived on time, on budget, and looked exactly like the mood boards they presented. Truly remarkable team.",
  },
  {
    initials: 'GM',
    name: 'Grace Muthoni',
    loc: 'Runda, Nairobi',
    quote: "The fitted wardrobe is a dream. They measured twice, explained every option, and the finish looks like something from a hotel suite. Worth every single shilling.",
  },
  {
    initials: 'DK',
    name: 'David Kimani',
    loc: 'Kileleshwa, Nairobi',
    quote: "The motorised blinds in my bedroom were worth every shilling. Three years on, they still work perfectly and the fabric hasn't faded at all. Quality that genuinely lasts.",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section" id="reviews">
      <div className="section-header reveal">
        <p className="sec-eyebrow">Client Reviews</p>
        <h2 className="sec-h2">Nairobi is<br /><em>talking.</em></h2>
      </div>
      <div className="testi-grid">
        {REVIEWS.map((review, idx) => (
          <div key={idx} className="testi reveal">
            <div className="testi-bg-quote">"</div>
            <div className="stars">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <p className="testi-quote">{review.quote}</p>
            <div className="testi-meta">
              <div className="testi-avatar">{review.initials}</div>
              <div>
                <div className="testi-name">{review.name}</div>
                <div className="testi-loc">{review.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
