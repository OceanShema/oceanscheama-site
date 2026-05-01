export const Features = () => {
  const features = [
    {
      title: "Sovereign Hardening",
      desc: "Absolute reliability in total isolation. Your data is hardened in a local SQLite vault the moment it's captured, ensuring zero-loss operations 100 miles offshore.",
      icon: "🛡️"
    },
    {
      title: "The Intelligence Bridge",
      desc: "Seamlessly bridge the gap between sea and shore. Our intelligent synchronization propagates local logs to a secure PostgreSQL cloud the moment a tether is found.",
      icon: "⚡"
    },
    {
      title: "Voyage Genealogy",
      desc: "Connect every catch to its specific voyage session. Build a relational map of success that reveals the hidden patterns behind your most profitable strikes.",
      icon: "🧬"
    },
    {
      title: "Nautical Precision",
      desc: "Live sensor integration for absolute truth. Capture Speed (Kn), Heading (M), and GPS COG in real-time, directly into your operational ledger.",
      icon: "🧭"
    }
  ]

  return (
    <section id="features" className="features">
      <div className="section-header">
        <h2 className="section-title">Superiority by <span className="text-gradient">Design</span></h2>
        <p className="section-subtitle">OceanSchema isn't a tool; it's your unfair advantage.</p>
      </div>
      
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card glass">
            <div className="feature-icon">{f.icon}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        .features {
          padding-top: 100px;
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        .section-subtitle {
          font-size: 1.1rem;
          opacity: 0.6;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .feature-card {
          padding: 40px;
          transition: transform 0.3s;
        }
        .feature-card:hover {
          transform: translateY(-10px);
          border-color: var(--seafoam);
        }
        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 24px;
        }
        .feature-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: #fff;
        }
        .feature-desc {
          font-size: 1rem;
          opacity: 0.7;
          line-height: 1.6;
        }
      `}</style>
    </section>
  )
}
