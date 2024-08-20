
import moviesData from './data'

const apiKey = import.meta.env.VITE_API_KEY;
const url = import.meta.env.VITE_API_URL;

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

export const fetchMovies = async () => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.slice(0, 30);
  } catch (error) {
    console.error('Fetch failed, using local data:', error);
    return moviesData.slice(0, 30); // Return the local data in case of an error
  }
};
