import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <header className="hero-header" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">Building the AI Perception Layer for the Ocean.</h1>
        <p className="hero-subtitle">We are creating the eyes for the ships, ports, and farms that power our world.</p>
         <div className="hero-actions">
          <a href="#contact" className="btn-primary">Get Involved</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;

