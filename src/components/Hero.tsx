import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <header className="hero-header" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">The AI for the Ocean</h1>
        <p className="hero-subtitle">Real-time data and intelligence to optimize maritime operations.</p>
         <div className="hero-actions">
          <a href="#contact" className="btn-primary">Get Involved</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;

