import React from 'react';

const MovieCard = ({ imageUrl }) => {
  return (
    <div className="w-32 h-48 rounded-lg overflow-hidden shadow-lg flex-shrink-0">
      <img 
        src={imageUrl} 
        alt="Movie Poster" 
        className="w-full h-full object-cover" 
      />
    </div>
  );
};

export default MovieCard;
