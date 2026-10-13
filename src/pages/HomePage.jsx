// src/pages/HomePage.jsx

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BandSlideshow from '../components/BandSlideshow';
import TourDates from '../components/TourDates';
import MediaSection from '../components/MediaSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="app-layout">
      <Navbar />

      <main>
        <Hero />
        <BandSlideshow />
        <TourDates />
        <MediaSection />
      </main>

      <Footer />
    </div>
  );
}