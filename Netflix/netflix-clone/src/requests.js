const API_KEY="2e60410431623dbf40c61981e0c53da7";

//exorting objects

const requests = {
    
fetchNetflixOriginal : `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,    
fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
fetchDocumentryMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=97`,

}

export default requests;