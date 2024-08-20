// src/App.jsx
import React, { useState, useEffect } from 'react';
import PopularMovies from './components/Populer';
import { fetchMovies } from './services/movieFetch';
import Header from './components/Header'
import './App.css'
import Slider from './components/Slider';
import Soon from './components/Soon';
import Footer from './components/Footer';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movieData = await fetchMovies();
        setMovies(movieData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    getMovies();
  }, []);

  return (
    <>
    <Header/>
    <Slider movies={movies}/>
    <PopularMovies movies={movies}/>
    <Soon movies={movies}/>
    <Footer/>
    </>
  );
}

export default App;
