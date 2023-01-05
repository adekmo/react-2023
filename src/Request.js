// const API_KEY = "0ca301b737e4913fdb1c21d51cbba60d";

// const request = {
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
//     fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// }

// export default request;


import axios from 'axios';

export const BASE_URL = 'https://gogoanime2.p.rapidapi.com';

const options = {
    params: {
        type: '1',
        page: '1'
    },
    headers: {
        'X-RapidAPI-Key': '427988ec25msh8f4d48cf4600ed7p103817jsn32e6eb82df4c',
        'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
    },
};

export const fetchFromAPI = async (url) => {
    const {
        data
    } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};