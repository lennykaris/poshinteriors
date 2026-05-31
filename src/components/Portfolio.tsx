import React from 'react';

interface BentoCell {
  className: string;
  img: string;
  alt: string;
  tag: string;
  label: string;
}

const BENTO_CELLS: BentoCell[] = [
  {
    className: 'b-cell b1',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    alt: 'Living room',
    tag: 'Living Room',
    label: 'Full interior — Karen, Nairobi',
  },
  {
    className: 'b-cell b2',
    img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bedroom curtains',
    tag: 'Curtains',
    label: 'Pinch pleat — Runda',
  },
  {
    className: 'b-cell b3',
    img: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=80',
    alt: 'Wardrobe',
    tag: 'Wardrobe',
    label: 'Walk-in — Kileleshwa',
  },
  {
    className: 'b-cell b4',
    img: 'https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bedroom',
    tag: 'Bedroom',
    label: 'Full design — Muthaiga',
  },
  {
    className: 'b-cell b5',
    img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80',
    alt: 'Drapes',
    tag: 'Drapes',
    label: 'Sheer voile — Westlands',
  },
  {
    className: 'b-cell b6',
    img: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1400&q=80',
    alt: 'Interior',
    tag: 'Full Interior',
    label: 'Complete fit-out — Gigiri',
  },
  {
    className: 'b-cell b7',
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80',
    alt: 'Bedroom curtains',
    tag: 'Blinds',
    label: 'Roman blinds — Lavington',
  },
  {
    className: 'b-cell b8',
    img: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=900&q=80',
    alt: 'Cushions',
    tag: 'Furnishings',
    label: 'Soft furnishings — Parklands',
  },
  {
    className: 'b-cell b9',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
    alt: 'Kitchen',
    tag: 'Kitchen',
    label: 'Kitchen & dining — Spring Valley',
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-header reveal">
        <p className="sec-eyebrow">Our Portfolio</p>
        <h2 className="sec-h2">
          Work that speaks<br /><em>louder than words.</em>
        </h2>
      </div>
      <div className="bento">
        {BENTO_CELLS.map((cell) => (
          <div key={cell.tag + cell.label} className={cell.className}>
            <img src={cell.img} alt={cell.alt} loading="lazy" />
            <div className="b-tag">{cell.tag}</div>
            <div className="b-label">
              <div className="b-label-txt">{cell.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
