import React from 'react';
import './Section.css';

const Laboratory: React.FC = () => {
  return (
    <section id="laboratory" className="section">
      <div className="container">
        <h2 className="section-title">Our Living Laboratory</h2>
        <p className="section-paragraph">
          Nova Scotia isn't just our market; it's our living laboratory. It offers direct access to a diverse ecosystem of commercial fisheries, international ports, cutting-edge aquaculture, and world-class ocean technology partners.
        </p>
        <p className="section-paragraph strong">
          This allows us to rapidly validate our products locally before we expand globally.
        </p>
      </div>
    </section>
  );
};

export default Laboratory;
