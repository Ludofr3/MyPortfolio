import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx"
import Footer from "./sections/Footer.jsx"
import Experience from "./sections/Experience.jsx";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import PropTypes from 'prop-types';

const AppLayout = ({ setCurrentSection, children }) => (
  <main className="min-h-dvh">
    <Navbar setCurrentSection={setCurrentSection} />
    <div className="max-w-7xl mx-auto pb-20">
      {children}
    </div>
    <Footer />
  </main>
);

AppLayout.propTypes = {
  setCurrentSection: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const App = () => {
  const [currentSection, setCurrentSection] = useState('#Home');
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  return (
    <AppLayout setCurrentSection={setCurrentSection} >
      {currentSection === '#Home' && <Hero setCurrentSection={setCurrentSection} isSmall={isSmall} isMobile={isMobile} isTablet={isTablet} />}
      {currentSection === '#About' && <About setCurrentSection={setCurrentSection} />}
      {currentSection === '#Work' && <Projects setCurrentSection={setCurrentSection} />}
      {currentSection === '#Work' && <Experience setCurrentSection={setCurrentSection} />}
      {currentSection === '#Contact' && <Contact setCurrentSection={setCurrentSection} isSmall={isSmall} isMobile={isMobile} isTablet={isTablet} />}
    </AppLayout>
  );
}

export default App
