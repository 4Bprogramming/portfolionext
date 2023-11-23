"use client";
import Navbar from "./Navbar/page";

import Principal from "./Home/page";
import Skills from "./Skills/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page"

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
      <Principal />
      <Skills/>
      <Projects/>
      <Contact/>
    
    </>
  );
}
