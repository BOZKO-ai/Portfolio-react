import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Componets/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Project';
import Contact from './Pages/contact';
import Footer from './Componets/footer';
import ScrollToTop from './Componets/Scrolltop';
import PageTransition from './Componets/PageTrans';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.style.backgroundColor = '#0F172A';
      document.body.style.color = '#F3F4F6';
    } else {
      document.body.style.backgroundColor = '#FFFFFF';
      document.body.style.color = '#1F2937';
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <Home darkMode={darkMode} />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition>
              <About darkMode={darkMode} />
            </PageTransition>
          } />
          <Route path="/projects" element={
            <PageTransition>
              <Projects darkMode={darkMode} />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <Contact darkMode={darkMode} />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
      <Footer darkMode={darkMode} />
      <ScrollToTop />
    </div>
  );
}

export default App;