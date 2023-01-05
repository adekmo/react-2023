import React from 'react'
import request from '../Request'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Row from '../components/Row'

const HomeScreen = () => {
    return (
        <div className='homeScreen'>
            {/* Navbar */}
            <Navbar />

            {/* Banner */}
            <Banner />

            {/* Row */}
            <Row title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOriginal} isLargeRow />
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovie} />
            <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />

        </div>
    )
}

export default HomeScreen