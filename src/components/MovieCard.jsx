import React, { useState } from 'react';
import {FaHeart } from 'react-icons/fa'; // Import the desired icon

const MovieCard = ({ imageUrl }) => {
  
  const [iconColor, setIconColor] = useState('text-gray-700');


  const toggleIconColor = () => {
    setIconColor((prevColor) =>
      prevColor === 'text-gray-700' ? 'text-red-500' : 'text-gray-700'
    );
  };

  return (
    <div className="relative w-32 h-48 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
      <img 
        src={imageUrl} 
        alt="Movie Poster" 
        className="w-full h-full object-cover" 
      />
      <div 
        className={`absolute bottom-2 right-2 bg-white p-1 rounded-full cursor-pointer`}
        onClick={toggleIconColor}
      >
        <FaHeart className={`${iconColor} w-5 h-5`} />
      </div>
    </div>
  );
};

export default MovieCard;
