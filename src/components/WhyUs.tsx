import React from 'react';
import './Section.css';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Why Us?</h2>
        <p className="section-paragraph">
          Our team has over eight years of experience building and deploying embedded systems. Our core expertise is bringing high-performance AI directly onto ruggedized, low-power hardware that operates reliably in harsh environments where cloud connectivity is a luxury, not a guarantee.
        </p>
        <p className="section-paragraph strong">
          We build technology for the real world, not the lab.
        </p>
      </div>
    </section>
  );
};

export default WhyUs;
