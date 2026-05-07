export const IndustryFocus = () => {
  return (
    <section className="industry-focus">
      <div className="focus-header">
        <div className="focus-tag">Strategic Deployment</div>
        <h2 className="focus-title">Fish <span className="text-gradient">Smarter</span>. Earn <span className="text-gradient">More</span>.</h2>
        <p className="focus-subtitle">
          Our operational ledger is purpose-built for elite fishing fleets. 
          By transforming routinely collected footprints into a competitive advantage, we give captains the surgical precision 
          needed to optimize every voyage and dominate the maritime economy.
        </p>
      </div>

      <style>{`
        .industry-focus {
          padding: 100px 20px 0 20px;
          text-align: center;
        }
        .focus-tag {
          display: inline-block;
          background: rgba(45, 212, 191, 0.1);
          color: var(--seafoam);
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .focus-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 24px;
        }
        .focus-subtitle {
          font-size: 1.2rem;
          opacity: 0.6;
          max-width: 700px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .focus-title { font-size: 2rem; }
        }
      `}</style>
    </section>
  )
}
