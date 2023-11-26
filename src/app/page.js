"use client";
import Navbar from "./Navbar/page";
import Footer from './Components/Footer'
import Principal from "./Home/page";
import Skills from "./Skills/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page"
import Home2 from './Home/HomePage'

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
      <Home2 />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer />
    
    </>
  );
}
