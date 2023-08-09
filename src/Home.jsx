import React from 'react'
import Navbar from '../src/components/navbar/Navbar';
import Header from '../src/components/header/Header';
import About from '../src/components/about/About';
import Services from '../src/components/services/Services';
import Contact from '../src/components/contact/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
