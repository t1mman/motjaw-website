import React from 'react';
import { SOCIAL_LINKS } from '../data/bandData';
import { Video, Volume2, ShieldCheck } from 'lucide-react';

export default function MediaSection() {
  return (
    <section id="media" className="section-container bg-alt">
      {/* À Propos */}
      <div id="about" className="about-grid">
        <div className="about-text">
          <div className="badge-pill">INTENSE, AUTHENTIQUE, PUISANT!</div>
          <h2 className="section-title">L'EXPÉRIENCE MOTJAW</h2>
          <p>
            Fondé avec la volonté de faire vibrer les passionnés de rock alternatif et de nu-metal, <strong>MOTJAW</strong> reproduit fidèlement la signature sonore et l'intensité émotionnelle de Linkin Park.
          </p>
          <p>
            Des riffs tranchants aux ambiances électro en passant par la dynamique vocale alternant mélodie et puissance brute, chaque prestation est pensée comme une immersion scénique complète avec régie technique adaptée.
          </p>
          <div className="features-checklist">
            <div className="check-item">
              <ShieldCheck size={18} className="text-neon-green" />
              <span>Répertoire best-of 75 à 120+ minutes</span>
            </div>
            <div className="check-item">
              <ShieldCheck size={18} className="text-neon-green" />
              <span>Kit éclairage scénique DMX autonome disponible</span>
            </div>
            <div className="check-item">
              <ShieldCheck size={18} className="text-neon-green" />
              <span>Système de sonorisation & technicien FOH sur demande</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lecteur Vidéo / Médias */}
      <div className="media-showcase">
        <div className="section-header">
          <h2 className="section-title">EN VIDÉO</h2>
          <p className="section-desc">Aperçu de l'énergie live et des performances du groupe.</p>
        </div>

        <div className="video-wrapper">
          <div className="video-card">
            <iframe 
              src={`https://www.youtube.com/embed/${SOCIAL_LINKS.featuredVideoId}?rel=0`} 
              title="MOTJAW Live Performance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>

        <div className="social-proof-bar">
          <p>Suivez les coulisses et les annonces sur nos plateformes officielles :</p>
          <div className="social-buttons">
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="btn-social yt">YouTube</a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="btn-social fb">Facebook</a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="btn-social ig">Instagram</a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="btn-social tt">TikTok</a>
          </div>
        </div>
      </div>
    </section>
  );
}