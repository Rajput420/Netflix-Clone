const API_KEY = '17c5f6b75c0baf14e3fffa3f711d0782';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=`,
}

export default requests;