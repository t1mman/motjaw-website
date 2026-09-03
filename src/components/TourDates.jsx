import React from 'react';
import { UPCOMING_SHOWS, SOCIAL_LINKS } from '../data/bandData';
import { MapPin, Calendar, ExternalLink, Flame } from 'lucide-react';

export default function TourDates() {
  return (
    <section id="tour" className="section-container">
      <div className="section-header">
        <h2 className="section-title">PROCHAINS SPECTACLES</h2>
        <p className="section-desc">Retrouvez-nous en salle et en festival partout au Québec.</p>
      </div>

      <div className="tour-list">
        {UPCOMING_SHOWS.map((show) => (
          <div key={show.id} className="tour-card">
            <div className="tour-date-box">
              <Calendar size={20} className="text-neon-green" />
              <span className="tour-date">{show.date}</span>
            </div>

            <div className="tour-info">
              <h3 className="tour-city-venue">
                <span className="tour-city">{show.city}</span>
                <span className="tour-separator">—</span>
                <span className="tour-venue">{show.venue}</span>
              </h3>
              <p className="tour-featuring">
                <Flame size={14} className="text-neon-purple inline-icon" />
                {show.featuring}
              </p>
            </div>

            <div className="tour-cta">
              <a 
                href={show.ticketLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-ticket"
              >
                Billets & Détails
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bannière Call To Action vers le booking */}
      <div className="booking-banner">
        <div className="banner-text">
          <h3>Vous organisez un festival, un événement ou diffusez en salle ?</h3>
          <p>Consultez notre portail technique, configurez vos besoins de sonorisation/éclairage et recevez un devis rapide.</p>
        </div>
        <a href={SOCIAL_LINKS.bookingPortal} className="btn-primary">
          Accéder au Portail Diffuseur
        </a>
      </div>
    </section>
  );
}