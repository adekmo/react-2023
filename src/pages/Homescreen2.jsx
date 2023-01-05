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
            <Row title="Popular" fetchUrl="popular" isLargeRow />
            <Row title="New Episode" fetchUrl="recent-release" />
            <Row title="Categories" fetchUrl="genre/sports" />
            <Row title="Movies" fetchUrl="anime-movies" />

        </div>
  )
}

export default Homescreen2