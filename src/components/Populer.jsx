import React, { useRef } from 'react';
import MovieCard from './MovieCard';

const PopularMovies = ({ movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -400, 
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 400,
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
              className="fa-solid fa-arrow-right fa-rotate-180 max-w-72" style={
                {color: 'white'}
              }
            > 
            </button>
            <button
              onClick={scrollRight}
              className="fa-solid fa-arrow-right max-w-72" style={
                {color: 'white'}
              }
            > 
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
                imageUrl={movie.big_image} 
              />
            ))}
          </div>
        </div>
    
        <hr className="border-t border-white mt-6" />
      </div>
    </section>
  );
};

export default PopularMovies;
