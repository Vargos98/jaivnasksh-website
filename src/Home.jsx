import React from 'react'
import Navbar from '../src/components/navbar/Navbar';
import Header from '../src/components/header/Header';
import About from '../src/components/about/About';
import Services from '../src/components/services/Services';
import Contact from '../src/components/contact/Contact';

export default function Home() {
  return (
    <div>
        <Navbar />
        <Header/>
        <About />
        <Services />
        <Contact />


    </div>
  )
}
