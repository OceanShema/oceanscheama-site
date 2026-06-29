import React from 'react';
import './Section.css';

const CallToAction: React.FC = () => {
  return (
    <section id="partner" className="section section-dark">
      <div className="container">
        <h2 className="section-title">Partner With Us</h2>
        <p className="section-paragraph">
          We are looking for forward-thinking maritime partners to join our pilot program. If you are interested in leveraging AI to improve your inspection operations, we want to hear from you.
        </p>
        <p className="section-paragraph">
          Let's work together to bring the future of marine intelligence to your operations.
        </p>
        <a href="mailto:contact@oceanschema.com" className="cta-button">Contact Us</a>
      </div>
    </section>
  );
};

export default CallToAction;
