import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const MarqueeTicker = () => {
  const { marqueeItems } = portfolioData;

  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        {marqueeItems.map((item, index) => (
          <div key={index} className="marquee-item">
            <span>{item}</span>
            {index < marqueeItems.length - 1 && <span className="starburst">✴</span>}
          </div>
        ))}
      </div>
    </div>
  );
};
