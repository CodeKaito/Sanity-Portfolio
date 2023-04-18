import './App.scss';

import React from 'react'
import { Navbar } from './components';
import { About, Footer, Header, Bio, Skills, Testimonials, Work } from './container/index'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
        <Header />
        <Bio />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default App
