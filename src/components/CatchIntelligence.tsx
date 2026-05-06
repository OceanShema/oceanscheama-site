import { useState, useEffect } from 'react'

export const CatchIntelligence = () => {
  const [activeNode, setActiveNode] = useState(0)

  const catches = [
    { id: 1, x: 25, y: 30, date: "May 12", value: "$12,400", prob: "94%", loc: "Grand Banks Alpha" },
    { id: 2, x: 65, y: 45, date: "May 18", value: "$8,900", prob: "88%", loc: "Scotian Shelf Beta" },
    { id: 3, x: 40, y: 70, date: "May 25", value: "$15,200", prob: "91%", loc: "Emerald Basin" },
    { id: 4, x: 80, y: 20, date: "June 01", value: "$11,100", prob: "96%", loc: "Laurentian Channel" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % catches.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="intelligence" className="intel-section">
      <div className="section-header">
        <h2 className="section-title">The <span className="text-gradient">Data Advantage</span></h2>
        <p className="section-subtitle">Our hardware creates a unique dataset for OceanSchema, giving you a predictive edge. See the profit before you even leave the dock.</p>
      </div>

      <div className="intel-map-container glass">
        {/* Abstract Grid Map */}
        <div className="map-grid">
          {catches.map((c, i) => (
            <div 
              key={c.id}
              className={`catch-node ${i === activeNode ? 'active' : ''}`}
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
            >
              <div className="node-core"></div>
              <div className="node-ring"></div>
              
              {/* Data HUD */}
              <div className="node-hud glass">
                <div className="hud-line">
                  <span className="label">TARGET ZONE</span>
                  <span className="value">{c.loc}</span>
                </div>
                <div className="hud-line">
                  <span className="label">EST. MARKET VALUE</span>
                  <span className="value" style={{ color: '#2dd4bf', fontWeight: 'bold' }}>{c.value}</span>
                </div>
                <div className="hud-line">
                  <span className="label">STRIKE PROBABILITY</span>
                  <span className="value">{c.prob}</span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Scanning Line */}
          <div className="scanner"></div>
        </div>

        <div className="map-legend">
          <div className="legend-item">
            <span className="dot active"></span>
            <span>High-Probability Strike</span>
          </div>
          <div className="legend-item">
            <span className="dot"></span>
            <span>Historical Success Area</span>
          </div>
        </div>
      </div>

      <style>{`
        .intel-section { padding-top: 100px; }
        .intel-map-container {
          height: 600px;
          position: relative;
          margin-top: 40px;
          overflow: hidden;
          background: radial-gradient(circle at center, #001f3f, #000b18);
        }
        .map-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          perspective: 1000px;
        }
        .catch-node {
          position: absolute;
          width: 12px;
          height: 12px;
          transform: translate(-50%, -50%);
          cursor: pointer;
          z-index: 5;
        }
        .node-core {
          width: 100%;
          height: 100%;
          background: var(--water);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--water);
        }
        .node-ring {
          position: absolute;
          inset: -10px;
          border: 1px solid var(--water);
          border-radius: 50%;
          opacity: 0;
          transform: scale(0);
        }
        .catch-node.active .node-core {
          background: var(--seafoam);
          box-shadow: 0 0 25px var(--seafoam);
          transform: scale(1.5);
          transition: all 0.5s ease;
        }
        .catch-node.active .node-ring {
          animation: node-ping 2s infinite;
        }
        @keyframes node-ping {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(3); opacity: 0; }
        }

        .node-hud {
          position: absolute;
          left: 25px;
          top: -20px;
          padding: 15px;
          width: 220px;
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
          z-index: 10;
        }
        .catch-node.active .node-hud {
          opacity: 1;
          transform: translateX(0);
        }
        .hud-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .hud-line:last-child { margin-bottom: 0; }
        .hud-line .label {
          font-size: 0.6rem;
          font-weight: 800;
          color: var(--seafoam);
          letter-spacing: 1px;
        }
        .hud-line .value {
          font-size: 0.75rem;
          color: #fff;
          font-family: monospace;
        }

        .scanner {
          position: absolute;
          top: 0;
          left: -10%;
          width: 20%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(45, 212, 191, 0.05), transparent);
          animation: scan 8s infinite linear;
        }
        @keyframes scan {
          from { left: -20%; }
          to { left: 120%; }
        }

        .map-legend {
          position: absolute;
          bottom: 20px;
          left: 20px;
          display: flex;
          gap: 20px;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .legend-item { display: flex; align-items: center; gap: 8px; }
        .dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.2); }
        .dot.active { background: var(--seafoam); box-shadow: 0 0 10px var(--seafoam); }
      `}</style>
    </section>
  )
}
