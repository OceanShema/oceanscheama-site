import React from 'react';
import './Section.css';

const Market: React.FC = () => {
  return (
    <section id="market" className="section">
      <div className="container">
        <h2 className="section-title">A Global Opportunity</h2>
        <p className="section-paragraph">
          This is not a niche market. There are over 50,000 commercial vessels worldwide, thousands of ports, and a rapidly growing number of offshore wind farms and aquaculture facilities.
        </p>
        <p className="section-paragraph strong">
          Every one of these assets requires regular, certified visual inspection—a massive, underserved global market.
        </p>
      </div>
    </section>
  );
};

export default Market;
