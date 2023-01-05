import axios from 'axios';

const instance = axios.create({
    baseURL : "https://gogoanime2.p.rapidapi.com"
})

export default instance;