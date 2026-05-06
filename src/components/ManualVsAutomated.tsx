export const ManualVsAutomated = () => {
  return (
    <section className="mv-section">
      <div className="section-header">
        <h2 className="section-title">The End of the <span className="text-gradient">Logbook Era</span></h2>
        <p className="section-subtitle">Commercial fishing is hard enough. Your data entry shouldn't be.</p>
      </div>

      <div className="comparison-container">
        <div className="side manual-side glass">
          <div className="side-label">The Manual Burden</div>
          <ul className="comparison-list">
            <li>
              <span className="icon">📝</span>
              <div className="text">
                <strong>Wet Paper & Pens</strong>
                <p>Wrestling with soggy logs and ink that runs in the salt spray.</p>
              </div>
            </li>
            <li>
              <span className="icon">🖐️</span>
              <div className="text">
                <strong>Manual Tallying</strong>
                <p>Taking your hands off the gear to count and record every single catch.</p>
              </div>
            </li>
            <li>
              <span className="icon">❓</span>
              <div className="text">
                <strong>Environmental Guesswork</strong>
                <p>Estimating water temp and depth without precise, time-synced sensors.</p>
              </div>
            </li>
            <li>
              <span className="icon">💻</span>
              <div className="text">
                <strong>Digital Double Entry</strong>
                <p>Spending hours at the dock transcribing soggy notes into a computer or phone.</p>
              </div>
            </li>
            <li>
              <span className="icon">⚖️</span>
              <div className="text">
                <strong>Regulatory Stress</strong>
                <p>Hoping your manual logs are accurate enough to pass the next audit.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="hardware-bridge">
          <div className="hardware-icon glass">
            <div className="pulse"></div>
            <span className="chip-icon">📟</span>
          </div>
          <div className="arrow-path"></div>
        </div>

        <div className="side automated-side glass">
          <div className="side-label highlights">The Hardware Edge</div>
          <ul className="comparison-list">
            <li>
              <span className="icon">👁️</span>
              <div className="text">
                <strong>Visual Recognition</strong>
                <p>Custom AI hardware identifies species instantly as they cross the deck.</p>
              </div>
            </li>
            <li>
              <span className="icon">🤲</span>
              <div className="text">
                <strong>Hands-Free Logging</strong>
                <p>The device logs everything automatically. You never touch a pen.</p>
              </div>
            </li>
            <li>
              <span className="icon">📡</span>
              <div className="text">
                <strong>Embedded Sensors</strong>
                <p>Precision thermistors and GPS log the exact conditions of every catch.</p>
              </div>
            </li>
            <li>
              <span className="icon">✅</span>
              <div className="text">
                <strong>Verified Compliance</strong>
                <p>Generate 100% accurate reports with a single tap once you're back in range.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .mv-section {
          padding: 100px 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .comparison-container {
          display: grid;
          grid-template-columns: 1fr 120px 1fr;
          gap: 30px;
          align-items: center;
          margin-top: 60px;
        }
        .side {
          padding: 40px;
          border-radius: 24px;
          height: 100%;
          position: relative;
        }
        .side-label {
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 30px;
          opacity: 0.6;
        }
        .side-label.highlights {
          color: var(--seafoam);
          opacity: 1;
        }
        .manual-side {
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed rgba(255, 255, 255, 0.1);
        }
        .automated-side {
          background: rgba(0, 255, 157, 0.03);
          border: 1px solid rgba(0, 255, 157, 0.2);
          box-shadow: 0 0 40px rgba(0, 255, 157, 0.05);
        }
        .comparison-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .comparison-list li {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .comparison-list .icon {
          font-size: 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          flex-shrink: 0;
        }
        .automated-side .icon {
          background: rgba(0, 255, 157, 0.1);
          color: var(--seafoam);
        }
        .comparison-list strong {
          display: block;
          font-size: 1.1rem;
          margin-bottom: 4px;
        }
        .comparison-list p {
          font-size: 0.95rem;
          opacity: 0.6;
          line-height: 1.5;
          margin: 0;
        }

        .hardware-bridge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        .hardware-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          position: relative;
          background: var(--deep-blue);
          border-color: var(--seafoam);
        }
        .pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          border: 2px solid var(--seafoam);
          animation: hardware-pulse 2s infinite;
        }
        @keyframes hardware-pulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @media (max-width: 968px) {
          .comparison-container {
            grid-template-columns: 1fr;
          }
          .hardware-bridge {
            padding: 40px 0;
            transform: rotate(90deg);
          }
        }
      `}</style>
    </section>
  )
}
