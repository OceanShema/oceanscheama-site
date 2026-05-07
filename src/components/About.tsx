export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">The World’s First <span className="text-gradient">Operational Ledger</span></h2>
          <p className="about-text">
            Instead of relying on manual catch reports, OceanSchema passively collects vessel GPS coordinates and fuel usage data throughout each trip. 
            We turn routinely collected navigation metrics into insights that drive smarter, more efficient fishing operations.
          </p>
          <div className="about-grid">
            <div className="about-item glass">
              <h3>Yield Optimization</h3>
              <p>Identify high-yield fishing locations based on vessel stop patterns and stay durations detected by our high-fidelity GPS logging.</p>
            </div>
            <div className="about-item glass">
              <h3>Fuel Efficiency</h3>
              <p>Measure fuel consumption across different routes and areas to optimize future voyages and significantly reduce operational costs.</p>
            </div>
            <div className="about-item glass">
              <h3>Historical Advantage</h3>
              <p>Build a reliable, data-driven view of where your fleet performs best by ranking spots based on multi-year historical performance.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 120px 20px;
          background: radial-gradient(circle at bottom left, var(--ocean-deep), transparent);
        }
        .about-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .about-content {
          text-align: center;
        }
        .about-text {
          font-size: 1.5rem;
          opacity: 0.8;
          line-height: 1.6;
          margin: 0 auto 60px;
          max-width: 800px;
        }
        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        .about-item {
          padding: 40px;
          transition: transform 0.3s;
        }
        .about-item h3 {
          font-size: 1.3rem;
          margin-bottom: 16px;
          color: var(--seafoam);
        }
        .about-item p {
          opacity: 0.7;
          line-height: 1.5;
        }
      `}</style>
    </section>
  )
}
