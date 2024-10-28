import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Loader from './components/Loader';
import Blog from './components/Blog';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/about">Hakkımızda</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <AnimatedRoutes />
      <Loader></Loader>
    </Router>
  );
}

export default App;
