import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Row from '../components/Row'

const Homescreen2 = () => {
  return (
    <div className='homeScreen'>
            {/* Navbar */}
            <Navbar />

            {/* Banner */}
            <Banner />

            {/* Row */}
            <Row title="New Episode" fetchUrl="recent-release" isLargeRow />
            <Row title="Popular" fetchUrl="popular" />
            <Row title="Sports" fetchUrl="genre/sports" />
            <Row title="Comedy" fetchUrl="genre/comedy" />
            <Row title="Movies" fetchUrl="anime-movies" />

        </div>
  )
}

export default Homescreen2