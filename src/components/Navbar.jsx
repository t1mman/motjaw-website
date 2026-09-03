import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../data/bandData';
import { Menu, X, Calendar, Music, Mail } from 'lucide-react';
import logoImg from '../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-brand">
          <img 
            src={logoImg} 
            alt="MOTJAW Logo" 
            className="nav-logo" 
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="brand-text">MOTJAW</span>
        </a>

        {/* Liens Desktop */}
        <div className="nav-links desktop-only">
          <a href="#about">Le Groupe</a>
          <a href="#tour">Spectacles</a>
          <a href="#media">Médias</a>
          <a href="#contact">Contact</a>
          <a href={SOCIAL_LINKS.bookingPortal} className="btn-booking-nav">
            Booking & Devis
          </a>
        </div>

        {/* Bouton Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={26} color="#00ff88" /> : <Menu size={26} color="#00ff88" />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setIsOpen(false)}>Le Groupe</a>
          <a href="#tour" onClick={() => setIsOpen(false)}>Spectacles</a>
          <a href="#media" onClick={() => setIsOpen(false)}>Médias</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a 
            href={SOCIAL_LINKS.bookingPortal} 
            className="btn-booking-nav mobile"
            onClick={() => setIsOpen(false)}
          >
            Booking & Devis
          </a>
        </div>
      )}
    </nav>
  );
}