// src/pages/LinkinParkTributePage.jsx
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import BandSlideshow from '../components/BandSlideshow';
import TourDates from '../components/TourDates';
import Footer from '../components/Footer';

export default function LinkinParkTributePage() {
  return (
    
    <div className="app-layout">
      <Navbar />

      <main>

        <section className="hero-section">
          <div className="hero-panel">

            <h1 className="cyan-gradient-title">
              Linkin Park Tribute Band Québec
            </h1>

            <p className="hero-subtitle">
              MOTJAW est un groupe hommage à Linkin Park
              offrant des spectacles partout au Québec.
              Revivez les grands classiques de Linkin Park
              avec une production immersive inspirée des
              performances du groupe légendaire.
            </p>

          </div>
        </section>

        <BandSlideshow />

        <section className="section-container">

          <div className="about-grid">
            <div className="about-text">

              <h2 className="section-title">
                Hommage à Linkin Park au Québec
              </h2>

              <p>
                MOTJAW propose une expérience fidèle à
                l'univers de Linkin Park avec un répertoire
                couvrant les albums emblématiques du groupe.
              </p>

              <p>
                Disponible pour festivals, salles,
                événements corporatifs, événements privés
                et spectacles spéciaux partout au Québec.
              </p>

              <p>
                Notre production combine musique live,
                éclairage immersif et énergie scénique
                afin de recréer la puissance des concerts
                de Linkin Park.
              </p>

            </div>
          </div>

        </section>

        <TourDates />

      </main>

      <Footer />
    </div>
  );
}