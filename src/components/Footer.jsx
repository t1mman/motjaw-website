import React from 'react';
import { SOCIAL_LINKS } from '../data/bandData';
import { Mail, ArrowUpRight } from 'lucide-react';

// Icônes SVG pour les marques (Facebook, Instagram, YouTube)
const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YouTubeIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-content">
        <div className="footer-col brand-col">
          <h3 className="footer-brand">MOTJAW</h3>
          <p className="footer-tagline">Hommage à Linkin Park — Québec, Canada.</p>
          <div className="footer-socials">
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon size={20} />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <YouTubeIcon size={20} />
            </a>
          </div>
        </div>

        <div className="footer-col links-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#hero">Accueil</a></li>
            <li><a href="#about">Le Groupe</a></li>
            <li><a href="#tour">Spectacles</a></li>
            <li><a href="#media">Médias</a></li>
          </ul>
        </div>

        <div className="footer-col booking-col">
          <h4>Production & Diffusion</h4>
          <p>Pour réserver le groupe ou soumettre un devis technique :</p>
          <a href={SOCIAL_LINKS.bookingPortal} className="btn-footer-booking">
            Portail de Réservation
            <ArrowUpRight size={16} />
          </a>
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="footer-email-link">
            <Mail size={16} />
            {SOCIAL_LINKS.email}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MOTJAW. Tous droits réservés.</p>
      </div>
    </footer>
  );
}