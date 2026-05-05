export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">The <span className="text-gradient">Intelligence</span> Behind the Ocean</h2>
          <p className="about-text">
            We are an Ocean Data and AI company. Our mission is to transform the world's most complex and 
            unpredictable environment into a field of high-fidelity intelligence. 
          </p>
          <div className="about-grid">
            <div className="about-item glass">
              <h3>Massive Data Capture</h3>
              <p>Harnessing millions of nautical data points to map the unseen patterns of the deep sea.</p>
            </div>
            <div className="about-item glass">
              <h3>Predictive AI</h3>
              <p>Our proprietary neural networks correlate environmental variables to forecast outcomes with surgical precision.</p>
            </div>
            <div className="about-item glass">
              <h3>Real-Time Analysis</h3>
              <p>Transforming raw oceanic vectors into actionable strategic assets at the edge.</p>
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
