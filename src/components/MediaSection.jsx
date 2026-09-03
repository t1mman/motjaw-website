import React from 'react';
import { SOCIAL_LINKS } from '../data/bandData';
import { Video, Volume2, ShieldCheck } from 'lucide-react';

export default function MediaSection() {
  return (
    <section id="media" className="section-container bg-alt">
      {/* À Propos */}
      <div id="about" className="about-grid">
        <div className="about-text">
          <div className="badge-pill">INTENSE, AUTHENTIQUE, PUISSANT!</div><br />
          <h2 className="section-title">L'EXPÉRIENCE <span className="brand-font">MOTJAW</span></h2>
          <p>
            L’expérience Linkin Park la plus authentique au Québec. <br />
            Un show intense, immersif et chargé d’émotion qui fait vibrer chaque salle.<br />
            Préparez-vous à revivre les classiques d’hier à aujourd’hui de Linkin Park dans un spectacle où la puissance sonore, l’énergie brute et la connexion avec le public créent un moment unique. MOTJAW, c’est une communauté qui grandit à chaque performance — et vous en faites partie dès la première note.

          </p>
          <p>
            
          </p>
          <div className="features-checklist">
            <div className="check-item">
              <ShieldCheck size={18} className="text-neon-green" />
              <span className="text-neon-green">Répertoire varié jusqu'à 120+ minutes</span>
            </div>
            <div className="check-item">
              <ShieldCheck size={18} className="text-neon-green" />
              <span className="text-neon-green">Éclairage et ambiance immersive unique en son genre</span>
            </div>
            <div className="check-item">
              <ShieldCheck size={18} className="text-neon-green" />
              <span className="text-neon-green">Plusieurs formules disponibles selon vos besoins</span>
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