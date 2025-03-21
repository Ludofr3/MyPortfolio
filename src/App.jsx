import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
// import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
import Experience from "./sections/Experience.jsx";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const AppLayout = ({ setCurrentSection, children }) => (
  <main>
    <Navbar setCurrentSection={setCurrentSection} />
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
    <Footer />
  </main>
);

const App = () => {
  const [currentSection, setCurrentSection] = useState('#Home');
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 667 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  return (
    <main>
      <AppLayout setCurrentSection={setCurrentSection} >
        {currentSection === '#Home' && <Hero setCurrentSection={setCurrentSection} isSmall={isSmall} isMobile={isMobile} isTablet={isTablet} />}
        {currentSection === '#About' && <About setCurrentSection={setCurrentSection} />}
        {currentSection === '#Work' && <Projects setCurrentSection={setCurrentSection} />}
        {/* {currentSection === '#Work' && <Clients setCurrentSection={setCurrentSection} />} */}
        {currentSection === '#Work' && <Experience setCurrentSection={setCurrentSection} />}
        {currentSection === '#Contact' && <Contact setCurrentSection={setCurrentSection} isSmall={isSmall} isMobile={isMobile} isTablet={isTablet} />}
      </AppLayout>
    </main>
  );
}

export default App