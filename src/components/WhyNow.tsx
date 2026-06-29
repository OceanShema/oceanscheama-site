import React from 'react';
import './Section.css';

const WhyNow: React.FC = () => {
  return (
    <section id="why-now" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Why Now?</h2>
        <p className="section-paragraph">
          The market is ready for this transformation. Key trends are converging to create a perfect storm for innovation:
        </p>
        <ul className="feature-list">
          <li>Aging critical infrastructure demanding better monitoring.</li>
          <li>Global workforce shortages in skilled inspection roles.</li>
          <li>Steadily rising costs of traditional inspection methods.</li>
          <li>The maturity of AI at the edge for industrial applications.</li>
          <li>A boom in autonomous marine robotics that need perception.</li>
        </ul>
      </div>
    </section>
  );
};

export default WhyNow;
