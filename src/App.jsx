
import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Eye from './components/Eye'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './components/Footer'


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="text-white min-h-screen w-full bg-zinc-900">
      <Navbar />

      <LandingPage />

      <Marque />

      <About />

      <Eye />
      <Cards />
      <Footer />

      </div>
  )
}

export default App