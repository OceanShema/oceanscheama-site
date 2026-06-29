import React from 'react';
import './Section.css';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="section section-dark">
      <div className="container">
        <h2 className="section-title">The Vision</h2>
        <p className="section-paragraph">
          OceanSchema is building the world's first edge AI perception platform for marine infrastructure. We are creating the AI-powered eyes for the ocean's industrial assets.
        </p>
        <p className="section-paragraph strong">
          This is bigger than just a camera; it's a new layer of intelligence for the entire maritime industry.
        </p>
      </div>
    </section>
  );
};

export default Vision;
