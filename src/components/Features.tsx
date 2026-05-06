export const Features = () => {
  const features = [
    {
      title: "Automated Recognition",
      desc: "Our custom hardware identifies species instantly using offline AI. No more manual logs—just focus on your catch while the device handles the identification and data entry.",
      icon: "🔍"
    },
    {
      title: "Environmental Intelligence",
      desc: "Built-in temperature sensors automatically log the water conditions at every catch location. Understand the environment that yields the best results without lifting a finger.",
      icon: "🌡️"
    },
    {
      title: "Offline-First Reliability",
      desc: "Designed for the deep sea where signals don't reach. The device stores all data locally and syncs automatically to OceanSchema the moment you reach connectivity.",
      icon: "📡"
    },
    {
      title: "The Wealth Map",
      desc: "Turn every voyage into an investment. Build a private, permanent record of your most profitable strikes so you can return to the money year after year with surgical precision.",
      icon: "🗺️"
    }
  ]

  return (
    <section id="features" className="features">
      <div className="section-header">
        <h2 className="section-title">Superiority by <span className="text-gradient">Design</span></h2>
        <p className="section-subtitle">OceanSchema isn't just software; it's your unfair advantage on the water.</p>
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
