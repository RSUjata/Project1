import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import Consulting from './components/Industries/Consulting';
import ContactPage from './pages/ContactPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import NewsPage from './pages/NewsSection';
import OffshorePage from './pages/OffshorePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/industries/consulting" element={<Consulting />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/offshore" element={<OffshorePage />} />




      </Routes>
    </Router>
  );
}

export default App;
