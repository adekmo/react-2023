import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { fetchFromAPI } from '../Request';
import './Row.css'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchFromAPI(fetchUrl)
            .then((data) => setMovies(data));
    }, [fetchUrl])

    console.log('movs', movies);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row-posters'>
                {movies.map((movie) =>
                (
                    
                    <Link to={`/detail/${movie.animeId}`}>
                        <img className={`row-poster ${isLargeRow ? 'row-poster-large' : 'row-poster-normal'}`} key={movie.animeId} src={movie?.animeImg} alt={movie?.animeTitle} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Row