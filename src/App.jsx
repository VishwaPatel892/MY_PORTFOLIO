import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import FigmaDesigns from './components/FigmaDesigns';
import Hackathon from './components/Hackathon';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import LeetCode from './components/LeetCode';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Background3D from './components/Background3D';
import CustomCursor from './components/CustomCursor';

import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Routes, Route } from 'react-router-dom';
import LiveDemo from './components/LiveDemo';

// Main Layout Component
const MainLayout = () => (
  <div className="min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-300 relative">
    <CustomCursor />
    <Background3D />
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Achievements />
      <Projects />
      <Hackathon />
      <Certificates />
      <LeetCode />
      <Contact />
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/demo/:id" element={<LiveDemo />} />
      </Routes>
    </>
  );
}

export default App;
