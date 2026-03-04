import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import StatsCounter from './components/StatsCounter';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorSpotlight from './components/CursorSpotlight';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  const [loading, setLoading] = useState(true);
  useScrollReveal('.reveal');

  return (
    <>
      <CursorSpotlight />
      <ScrollProgress />
      <BackToTop />
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <div className={`App ${loading ? 'app-hidden' : ''}`}>
        <Navbar />
        <Hero />
        <StatsCounter />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
