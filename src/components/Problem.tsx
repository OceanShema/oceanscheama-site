import React from 'react';
import './Section.css';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="section">
      <div className="container">
        <h2 className="section-title">The Problem</h2>
        <p className="section-paragraph">
          Every year, ships, fish farms, offshore platforms, and ports spend billions inspecting critical assets manually. These inspections are expensive, slow, dangerous, and often inconsistent.
        </p>
        <p className="section-paragraph strong">
          The marine industry still relies heavily on human visual inspection, a process that hasn't changed in decades.
        </p>
      </div>
    </section>
  );
};

export default Problem;
