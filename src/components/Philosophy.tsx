export const Philosophy = () => {
  return (
    <section className="philosophy-section glass">
      <div className="philosophy-content">
        <div className="quote-icon">"</div>
        <h2 className="philosophy-text">
          In the world of commercial fishing, a <span className="text-gradient">Surgical Strike</span> is a mission that turns navigation metrics into a proprietary advantage.
        </h2>
        <p className="philosophy-subtext">
          OceanSchema is built for the captains who treat every voyage as a data-driven operation. 
          No wandering. No guessing. Just turn routinely collected footprints into insights that help you make better planning decisions trip after trip.
        </p>
      </div>

      <style>{`
        .philosophy-section {
          margin: 60px auto;
          padding: 80px 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .philosophy-content {
          max-width: 900px;
          position: relative;
          z-index: 2;
        }
        .quote-icon {
          font-size: 8rem;
          font-family: serif;
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0.1;
          color: var(--seafoam);
        }
        .philosophy-text {
          font-size: 2.2rem;
          line-height: 1.3;
          font-weight: 700;
          margin-bottom: 32px;
          color: #fff;
        }
        .philosophy-subtext {
          font-size: 1.2rem;
          opacity: 0.7;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .philosophy-text { font-size: 1.6rem; }
          .philosophy-subtext { font-size: 1rem; }
        }
      `}</style>
    </section>
  )
}
