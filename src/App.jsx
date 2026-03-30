import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Hackathon from './components/Hackathon';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Background3D from './components/Background3D';
import CustomCursor from './components/CustomCursor';

import LeetCode from './components/LeetCode';

import Certificates from './components/Certificates';
import About from './components/About';
import ScrollToTop from './components/ScrollToTop';

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
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/demo/:id" element={<LiveDemo />} />
    </Routes>
  );
}

export default App;
