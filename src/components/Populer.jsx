import React, { useRef, useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const PopularMovies = ({ movies }) => {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current && !isAtStart) {
      scrollRef.current.scrollBy({
        left: -400,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && !isAtEnd) {
      scrollRef.current.scrollBy({
        left: 400,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current;

      const handleInitialCheck = () => {
        // Check the position and set states
        checkScrollPosition();
        // If at the start, enable the right arrow
        if (isAtStart) {
          setIsAtEnd(false);
        }
      };

      // Add scroll event listener
      scrollElement.addEventListener('scroll', checkScrollPosition);

      // Perform an initial check
      handleInitialCheck();

      return () => {
        scrollElement.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  return (
    <section className="py-8 relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Most Popular</h2>
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              className={`fa-solid fa-arrow-right fa-rotate-180 max-w-72 ${isAtStart ? 'text-gray-400 cursor-not-allowed' : 'text-white'}`}
              style={{ color: isAtStart ? 'gray' : 'white' }}
              disabled={isAtStart}
            />
            <button
              onClick={scrollRight}
              className={`fa-solid fa-arrow-right max-w-72 ${isAtEnd ? 'text-gray-400 cursor-not-allowed' : 'text-white'}`}
              style={{ color: isAtEnd ? 'gray' : 'white' }}
              disabled={isAtEnd}
            />
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
