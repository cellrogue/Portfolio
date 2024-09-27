import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import LandingPage from "./scenes/LandingPage";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import About from "./scenes/About";
import Contact from "./scenes/Contact";
import Projects from "./scenes/Projects";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-dark-blue">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage} 
      />
      <div className="w-5/6 mx-auto md:h-full mb-10">
        <LandingPage setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full mb-10">
        <About />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full mb-10 md:flex md:flex-grow ">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full mb-10">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full mb-10 flex flex-grow">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
