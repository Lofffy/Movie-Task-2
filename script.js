
const apiKey = "e5dbe8d9cbmsh5c61fb25c63c9ccp1a11bajsn726639cf3a3d";


const url = "https://imdb-top-100-movies.p.rapidapi.com/";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
};

var movies = fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Limit the data to only the first 15 movies
        const limitedMovies = data.slice(0, 15);
    })
    .catch(error => {
        console.error('Error:', error);
    });