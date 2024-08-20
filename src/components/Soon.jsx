
import React from 'react';
import SoonCard from './SoonCard';

export default function Soon({ movies }) {
  return (
    <section className="py-8 relative">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Coming Soon</h2>
        </div>
        <div className="flex space-x-4 flex-wrap scrollbar-hide justify-between">
          {movies.map((movie, index) => (
            <SoonCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
