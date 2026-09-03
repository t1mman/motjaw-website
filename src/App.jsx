import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TourDates from './components/TourDates';
import MediaSection from './components/MediaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <TourDates />
        <MediaSection />
      </main>
      <Footer />
    </div>
  );
}