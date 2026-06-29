import React from 'react';
import './Section.css';

const Product: React.FC = () => {
  return (
    <section id="product" className="section">
      <div className="container">
        <h2 className="section-title">Our First Product</h2>
        <p className="section-paragraph">
          Our first product is an embedded AI inspection system that automatically detects corrosion, cracks, marine growth, damaged nets, and safety hazards directly on the edge.
        </p>
        <ul className="feature-list">
          <li>Works completely offline, no cloud required.</li>
          <li>Ruggedized for harsh marine environments.</li>
          <li>Low power consumption for remote deployment.</li>
          <li>Real-time detection and alerts.</li>
          <li>Deployable anywhere from a vessel to a dock.</li>
        </ul>
      </div>
    </section>
  );
};

export default Product;
