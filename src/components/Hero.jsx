import React from 'react';
import { SOCIAL_LINKS } from '../data/bandData';
import { Calendar, Ticket } from 'lucide-react';
import logoImg from '../assets/images/logo.png';

export default function Hero() {
  return (
    <header id="hero" className="hero-section">
      {/* Boîtier Glassmorphism central */}
      <div className="hero-panel">
        <div className="hero-logo-box">
          <img 
            src={logoImg} 
            alt="MOTJAW - Linkin Park Tribute au Québec" 
            className="hero-logo-main" 
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>

        {/* Titre avec dégradé Cyan Métallique */}
        <h1 className="cyan-gradient-title">
          <span className="brand-font">MOTJAW</span> - Linkin Park Tribute
        </h1>

        <p className="hero-subtitle">
          L’expérience Linkin Park la plus authentique au Québec. <br />
            Intense, immersive, Puissante.<br />
            Bienvenue dans l’univers <span className="brand-font">MOTJAW</span>. <br />

            Disponnibles pour les festivals, salles de spectacles, <br />
            bars, événements corporatifs et événements privés <br /> 
            partout au Québec et dans l’Est du Canada. <br />
        </p>

        {/* Onglets / Boutons de navigation */}
        <div className="hero-tabs-actions">
          <a href={SOCIAL_LINKS.bookingPortal} className="btn-tab-active">
            <Ticket size={20} />
            1. Demande de soumission
          </a>
          <a href="#tour" className="btn-tab-inactive">
            <Calendar size={20} />
            2. Dates de spectacles
          </a>
        </div>
      </div>
    </header>
  );
}