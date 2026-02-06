import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Legacy from './pages/Legacy';
import Ecosystem from './pages/Ecosystem';
import Timeline from './pages/Timeline';
import GlobalMap from './pages/GlobalMap';
import About from './pages/About';
import Submission from './pages/Submission';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="relative min-h-screen flex flex-col font-sans selection:bg-bronze/20 selection:text-charcoal bg-bone">
          <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legacy" element={<Legacy />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/global" element={<GlobalMap />} />
            <Route path="/about" element={<About />} />
            <Route path="/submission" element={<Submission />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;