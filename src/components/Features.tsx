export const Features = () => {
  const features = [
    {
      title: "Uninterrupted Focus",
      desc: "Stop wrestling with paperwork and signal drops. OceanSchema works silently in the background, letting you focus on the fish while it handles the details with 100% reliability.",
      icon: "🎣"
    },
    {
      title: "Fuel-to-Strike Mastery",
      desc: "Stop burning money on empty water. Automatically correlate your fuel consumption with catch volume to identify the exact spots that put the most money in your pocket.",
      icon: "💰"
    },
    {
      title: "Regulatory Freedom",
      desc: "Keep the inspectors happy without lifting a finger. Automated tag tracking and compliance audits mean no more fines, no more delays, and more time on the water.",
      icon: "⚖️"
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
