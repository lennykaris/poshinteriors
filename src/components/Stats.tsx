import React from 'react';

const STATS = [
  { num: '400+', label: 'Projects Done' },
  { num: '7', label: 'Years in Nairobi' },
  { num: '18+', label: 'Fabric Collections' },
  { num: '100%', label: 'Bespoke Always' },
];

export const Stats: React.FC = () => {
  return (
    <div className="stats-bar">
      {STATS.map((stat) => (
        <div key={stat.label} className="stat-item reveal">
          <div className="stat-num">{stat.num}</div>
          <div className="stat-lbl">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
