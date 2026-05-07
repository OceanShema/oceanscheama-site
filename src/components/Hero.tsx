export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="badge glass">Maritime Operational Ledger</div>
        <h1 className="hero-title">
          Transform Every Voyage into <br />
          <span className="text-gradient">Actionable Intelligence</span>.
        </h1>
        <p className="hero-subtitle">
          Capture vessel GPS routes and fuel usage — no manual logging, no guesswork — 
          to identify productive fishing spots, optimize routes, and reduce costs.
        </p>
        <div className="hero-actions">
          <a href="#about" className="btn-primary">Request a Demo</a>
          <a href="#intelligence" className="btn-secondary">Explore Insights</a>
        </div>
      </div>
      
      <div className="hero-visual glass">
        <div className="sonar-ping"></div>
        <div className="dashboard-preview">
          <div className="metric">
            <span className="label">FUEL FLOW</span>
            <span className="value">42.8 L/H</span>
          </div>
          <div className="metric">
            <span className="label">GPS CLUSTER</span>
            <span className="value">DETECTED</span>
          </div>
          <div className="metric">
            <span className="label">LEDGER</span>
            <span className="value">SYNCED</span>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          min-height: 100vh;
          padding-top: 120px;
        }
        .badge {
          display: inline-block;
          padding: 6px 16px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--seafoam);
          margin-bottom: 24px;
        }
        .hero-title {
          font-size: 4.5rem;
          line-height: 1.1;
          font-weight: 800;
          margin: 0 0 24px 0;
          letter-spacing: -2px;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          opacity: 0.7;
          max-width: 500px;
          margin-bottom: 40px;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
        }
        .btn-secondary {
          background: transparent;
          border: 1px solid var(--glass-border);
          color: #fff;
          padding: 12px 28px;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.2s;
        }
        .btn-secondary:hover {
          background: var(--glass);
        }
        
        .hero-visual {
          height: 400px;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .dashboard-preview {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          z-index: 2;
        }
        .metric {
          text-align: center;
        }
        .metric .label {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          opacity: 0.5;
        }
        .metric .value {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--seafoam);
        }
        
        .sonar-ping {
          position: absolute;
          width: 200px;
          height: 200px;
          border: 2px solid var(--seafoam);
          border-radius: 50%;
          opacity: 0;
          animation: ping 3s infinite linear;
        }
        @keyframes ping {
          0% { transform: scale(0.5); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }

        @media (max-width: 968px) {
          .hero { grid-template-columns: 1fr; text-align: center; }
          .hero-subtitle { margin: 0 auto 40px; }
          .hero-actions { justify-content: center; }
          .hero-title { font-size: 3rem; }
        }
      `}</style>
    </section>
  )
}
