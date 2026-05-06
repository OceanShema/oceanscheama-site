export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">The <span className="text-gradient">Hardware</span> Powering the Ocean</h2>
          <p className="about-text">
            We are an Ocean Data and AI company. Our mission is to automate the capture of maritime intelligence through 
            rugged, intelligent hardware, making it easier for fishers to navigate and profit from the deep sea.
          </p>
          <div className="about-grid">
            <div className="about-item glass">
              <h3>Automated Data Capture</h3>
              <p>Our hardware works silently to identify species and log environment data, eliminating manual paperwork.</p>
            </div>
            <div className="about-item glass">
              <h3>Offline AI Identification</h3>
              <p>Advanced neural networks built directly into our devices identify catches instantly, even in the middle of the ocean.</p>
            </div>
            <div className="about-item glass">
              <h3>Predictive Advantage</h3>
              <p>We transform raw environmental variables into a unique dataset that helps you find the most profitable spots.</p>
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
