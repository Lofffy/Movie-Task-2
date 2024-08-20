// src/components/PopularMovies.jsx
import React, { useRef } from 'react';
import MovieCard from './MovieCard';

const PopularMovies = ({ movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200, // Adjust this value for how much you want to scroll left
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200, // Adjust this value for how much you want to scroll right
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-8 relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Most Popular</h2>
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              className="bg-gray-800 text-white p-2 rounded-full"
            >
              &#8249;
            </button>
            <button
              onClick={scrollRight}
              className="bg-gray-800 text-white p-2 rounded-full"
            >
              &#8250;
            </button>
          </div>
        </div>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide"
          >
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                imageUrl={movie.big_image} // Replace with the correct field from your data
              />
            ))}
          </div>
        </div>
        {/* Add a white line separator */}
        <hr className="border-t border-white mt-6" />
      </div>
    </section>
  );
};

export default PopularMovies;
