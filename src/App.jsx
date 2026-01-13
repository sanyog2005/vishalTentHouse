import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components that stay on every page
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import the new Pages we created
import Home from './pages/Home'; // Adjust path if you didn't make a 'pages' folder
import OurStory from './pages/OurStory';
import VenuesPage from './pages/VenuesPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

import VenueDetailPage from './pages/VenueDetailPage'; // NEW PAGE

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen font-sans bg-white">
        
        {/* Navbar stays at the top of every page */}
        <Navbar />

        {/* Routes determine which page component to load */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/venues" element={<VenuesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/venues/:id" element={<VenueDetailPage />} /> {/* NEW ROUTE */}
        </Routes>

        {/* Footer stays at the bottom of every page */}
        <Footer />
        
      </div>
    </Router>
  );
};

export default App;