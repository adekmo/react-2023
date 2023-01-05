import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from '../Request';

import './Banner.css'

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchFromAPI(`popular`)
            .then((data) => setMovie(data[
                        Math.floor(Math.random() * data.length - 1)
                    ]));
    }, [])

    console.log('mov', movie);

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header className='banner' style={{ backgroundSize: "cover", backgroundImage: `url("${movie?.animeImg}")`, backgroundPosition: 'center center' }}>
            <div className='banner-content'>
                <h1 className='banner-title'>
                    {movie?.animeTitle || movie?.name || movie?.original_name}
                </h1>
                <div className='banner-buttons'>
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My List</button>
                </div>
                <h1 className='banner-desc'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className='banner-fadeBottom' />
        </header>
    )
}

export default Banner