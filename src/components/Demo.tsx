export const Demo = () => {
  return (
    <section id="vision" className="demo-section">
      <div className="section-header">
        <h2 className="section-title">The <span className="text-gradient">Success Loop</span></h2>
        <p className="section-subtitle">How OceanSchema transforms raw ocean variables into proprietary strategic assets.</p>
      </div>

      <div className="demo-container glass">
        <div className="demo-visual">
          {/* Abstract SVG Radar/Map */}
          <svg viewBox="0 0 400 400" className="radar-svg">
            <defs>
              <radialGradient id="radarGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--seafoam)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle cx="200" cy="200" r="180" stroke="var(--glass-border)" fill="none" strokeDasharray="5 5" />
            <circle cx="200" cy="200" r="120" stroke="var(--glass-border)" fill="none" />
            <circle cx="200" cy="200" r="60" stroke="var(--glass-border)" fill="none" />
            
            {/* Moving Radar Line */}
            <line x1="200" y1="200" x2="200" y2="20" stroke="var(--seafoam)" strokeWidth="2" className="radar-sweep" />
            
            {/* Abstract "Success Points" */}
            <circle cx="120" cy="150" r="4" fill="var(--water)" className="point p1" />
            <circle cx="280" cy="100" r="6" fill="var(--seafoam)" className="point p2" />
            <circle cx="220" cy="300" r="5" fill="var(--water)" className="point p3" />
            
            {/* Glowing Success Zone */}
            <circle cx="280" cy="100" r="30" fill="url(#radarGrad)" className="zone-glow" />
          </svg>
        </div>

        <div className="demo-content">
          <div className="step">
            <div className="step-num">01</div>
            <h4>Local Hardening</h4>
            <p>Data is instantly secured in a local vault. No signal required. No data decay. Absolute operational continuity.</p>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <h4>The Intelligence Bridge</h4>
            <p>As you approach the horizon, OceanSchema automatically propagates your local ledger to the secure cloud bridge.</p>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <h4>Digital Permanence</h4>
            <p>Your expertise is now a permanent asset. Searchable, secure, and ready to inform your next strategic strike.</p>
          </div>
        </div>
      </div>

      <style>{`
        .demo-section { padding-top: 100px; }
        .demo-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          padding: 60px;
          align-items: center;
          margin-top: 40px;
        }
        .demo-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }
        .radar-svg {
          width: 100%;
          max-width: 400px;
          filter: drop-shadow(0 0 20px rgba(45, 212, 191, 0.2));
        }
        .radar-sweep {
          transform-origin: 200px 200px;
          animation: sweep 4s infinite linear;
        }
        @keyframes sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .point {
          animation: pulse 2s infinite alternate;
        }
        .p1 { animation-delay: 0.5s; }
        .p2 { animation-delay: 1.2s; }
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }
        .demo-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .step {
          position: relative;
          padding-left: 60px;
        }
        .step-num {
          position: absolute;
          left: 0;
          top: 0;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--seafoam);
          opacity: 0.5;
        }
        .step h4 {
          font-size: 1.2rem;
          margin: 0 0 8px 0;
          color: #fff;
        }
        .step p {
          font-size: 0.95rem;
          opacity: 0.7;
          margin: 0;
        }

        @media (max-width: 850px) {
          .demo-container { grid-template-columns: 1fr; padding: 30px; }
        }
      `}</style>
    </section>
  )
}
