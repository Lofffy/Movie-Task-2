import React, { useState, useEffect } from 'react';

const Slider = ({ movies }) => {
  const limitedMovies = movies.slice(0, 10);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === limitedMovies.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, [limitedMovies.length]);

  return (
    <div className="relative rounded-xl overflow-hidden flex justify-center items-center">
      <img
        src={limitedMovies[currentIndex]?.big_image} 
        alt={`Slide ${currentIndex + 1}`}
        className="w-1/4 h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-white text-2xl font-bold mb-4">Enjoy Watching</h2>
        <button className="bg-gray-700 border border-white text-white px-6 py-2 rounded-lg">Watch Now</button>
      </div>
    </div>
  );
};

export default Slider;
