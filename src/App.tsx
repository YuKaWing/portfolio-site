import * as Scroll from 'react-scroll';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';


function App() {
  const [navBarClassName, setNavBarClassName] = useState("relative top-0 z-50");

  const handleScroll = (event: any) => {
    if (event.target.scrollingElement.scrollTop > window.innerHeight) {
      setNavBarClassName("sticky top-0 z-50")
    } else {
      setNavBarClassName("relative top-0 z-50")
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className='relative'>
      <Scroll.Element name="home">
        <Header />
      </Scroll.Element>
      <NavBar className={navBarClassName} />
      <Scroll.Element name="about">
        <About />
      </Scroll.Element>
      <Scroll.Element name="projects">
        <Projects />
      </Scroll.Element>
      <Scroll.Element name="contact">
        <Contact />
      </Scroll.Element>
      <Footer />
    </div>
  );
}

export default App;
