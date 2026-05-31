import React from 'react';

const MARQUEE_ITEMS = [
  'Bespoke Curtains',
  'Interior Design',
  'Fitted Wardrobes',
  'Blinds & Shutters',
  'Soft Furnishings',
  'Office Interiors',
  'Colour Consultation',
  'Free Site Visits',
  "Nairobi's Best",
];

export const Marquee: React.FC = () => {
  // Duplicate elements for seamless infinite loop scroll
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-strip">
      <div className="marquee-track" id="marqueeTrack">
        {items.map((item, idx) => (
          <div key={idx} className="marquee-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
