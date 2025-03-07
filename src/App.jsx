import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
import Experience from "./sections/Experience.jsx";
import { useState } from "react";

const App = () => {
  const [currentSection, setCurrentSection] = useState('#home');
  return (
    <main>
      <Navbar setCurrentSection={setCurrentSection} />
      {currentSection === '#home' && <Hero setCurrentSection={setCurrentSection} />}
      <div className="max-w-7xl mx-auto">
        {currentSection === '#About' && <About setCurrentSection={setCurrentSection} />}
        {currentSection === '#Work' && <Projects setCurrentSection={setCurrentSection} />}
        {currentSection === '#Work' && <Clients setCurrentSection={setCurrentSection} />}
        {currentSection === '#Work' && <Experience setCurrentSection={setCurrentSection} />}
        {currentSection === '#Contact' && <Contact setCurrentSection={setCurrentSection} />}
      </div>
      <Footer />
    </main>
  );
}

export default App