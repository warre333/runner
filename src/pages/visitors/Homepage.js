import React from 'react'

import "../../styles/wave.css"

import About from '../../components/visitors/homepage/About'
import Features from '../../components/visitors/homepage/Features'
import Header from '../../components/visitors/Header'
import Pricing from '../../components/visitors/homepage/Pricing'

function Homepage() {
  return (
    <div>
        <Header />

        <About />
        <Features />
        <Pricing />
    </div>
  )
}

export default Homepage