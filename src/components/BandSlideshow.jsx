// src/components/BandSlideshow.jsx

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BAND_SHOTS } from '../data/bandData';

export default function BandSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BAND_SHOTS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % BAND_SHOTS.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + BAND_SHOTS.length) % BAND_SHOTS.length);
  };

  return (
    <section className="band-slideshow-section">
      <div className="section-header">
        <h2 className="section-title">MOTJAW EN ACTION</h2>
        <p className="section-desc">
          Quelques moments captés lors de nos performances live.
        </p>
      </div>

      <div className="slideshow-container">

        {BAND_SHOTS.map((image, index) => (
          <div
            key={image}
            className={`slide ${index === current ? 'active' : ''}`}
          >
            <img
              src={image}
              alt={`MOTJAW Live ${index + 1}`}
            />
          </div>
        ))}

        <button
          className="slide-arrow left"
          onClick={prevSlide}
          aria-label="Image précédente"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          className="slide-arrow right"
          onClick={nextSlide}
          aria-label="Image suivante"
        >
          <ChevronRight size={28} />
        </button>

        <div className="slide-dots">
          {BAND_SHOTS.map((_, index) => (
            <button
              key={index}
              className={`slide-dot ${
                index === current ? 'active' : ''
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Image ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}