
import React from 'react';

const SoonCard = ({ movie }) => {
  return (
    <div className="w-56 h-80 rounded-lg overflow-hidden shadow-lg bg-gray-900 flex-shrink-0 mb-4 relative group">
      <img 
        src={movie.image} 
        alt={movie.title} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-lg font-semibold">{movie.title}</h3>
        <p className="text-white text-sm">{movie.year}</p>
      </div>
    </div>
  );
};

export default SoonCard;
