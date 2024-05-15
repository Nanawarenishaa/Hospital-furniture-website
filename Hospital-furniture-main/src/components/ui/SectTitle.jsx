// src/components/SectionTitle.js
import React from 'react';

const SectTitle = ({ title, subtitle }) => {
  return (
      <div className="text-center mt-16 relative">
    
      <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-2 font-sans relative inline-block">
        
        {title}
      </h2>
      <p className="text-lg md:text-2xl font-sans text-gray-700">{subtitle}</p>
    </div>
  );
};

export default SectTitle;
