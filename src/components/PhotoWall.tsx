import React from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
];

export const PhotoWall: React.FC = () => {
  return (
    <div className="photo-wall">
      {IMAGES.map((src, idx) => (
        <div key={idx} className="pw-item">
          <img src={src} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  );
};
