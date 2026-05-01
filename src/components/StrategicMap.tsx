import { useState } from 'react'

export const StrategicMap = () => {
  const [hoveredVoyage, setHoveredVoyage] = useState<string | null>(null)

  const voyages = [
    { id: "VOYAGE-712", path: "M 50 300 Q 150 250 250 280 T 450 200", catches: [{x: 150, y: 250}, {x: 350, y: 240}] },
    { id: "VOYAGE-804", path: "M 100 450 Q 250 400 300 300 T 500 150", catches: [{x: 250, y: 400}, {x: 400, y: 220}] }
  ]

  return (
    <section id="map" className="map-section">
      <div className="section-header">
        <h2 className="section-title">The <span className="text-gradient">Sovereign Map</span></h2>
        <p className="section-subtitle">A high-fidelity visualization of your proprietary voyage genealogy.</p>
      </div>

      <div className="map-interface glass">
        <div className="map-canvas">
          <svg viewBox="0 0 600 500" className="nautical-map">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Nautical Grid */}
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Voyage Paths */}
            {voyages.map((v) => (
              <g key={v.id} 
                 onMouseEnter={() => setHoveredVoyage(v.id)}
                 onMouseLeave={() => setHoveredVoyage(null)}
                 className={`voyage-group ${hoveredVoyage === v.id ? 'active' : ''}`}>
                <path d={v.path} className="voyage-path" />
                <path d={v.path} className="voyage-path-glow" />
                
                {/* Catch Nodes */}
                {v.catches.map((c, i) => (
                  <circle key={i} cx={c.x} cy={c.y} r="4" className="strike-node" />
                ))}
              </g>
            ))}
          </svg>

          {/* Floating Map HUD */}
          <div className={`map-hud glass ${hoveredVoyage ? 'visible' : ''}`}>
            <div className="hud-header">OPERATIONAL LEDGER</div>
            <div className="hud-body">
              <div className="hud-row">
                <span>SESSION:</span>
                <span className="value">{hoveredVoyage}</span>
              </div>
              <div className="hud-row">
                <span>STATUS:</span>
                <span className="value">HARDENED</span>
              </div>
              <div className="hud-row">
                <span>VECTORS:</span>
                <span className="value">28.4N / 12.1W</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .map-section { padding-top: 100px; }
        .map-interface {
          height: 600px;
          margin-top: 40px;
          position: relative;
          overflow: hidden;
          background: #000b1a;
          border-radius: 24px;
        }
        .map-canvas {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .nautical-map {
          width: 100%;
          height: 100%;
        }
        .voyage-path {
          fill: none;
          stroke: rgba(255, 255, 255, 0.2);
          stroke-width: 2;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 3s forwards ease-in-out;
        }
        .voyage-path-glow {
          fill: none;
          stroke: var(--water);
          stroke-width: 4;
          opacity: 0;
          filter: url(#glow);
          transition: opacity 0.3s;
        }
        .voyage-group.active .voyage-path-glow {
          opacity: 0.6;
        }
        .voyage-group.active .voyage-path {
          stroke: var(--seafoam);
          stroke-width: 3;
        }
        
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }

        .strike-node {
          fill: var(--seafoam);
          box-shadow: 0 0 10px var(--seafoam);
          transition: r 0.3s;
        }
        .voyage-group.active .strike-node {
          r: 6;
        }

        .map-hud {
          position: absolute;
          top: 30px;
          right: 30px;
          width: 240px;
          padding: 20px;
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.4s ease;
          pointer-events: none;
        }
        .map-hud.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hud-header {
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: var(--seafoam);
          margin-bottom: 15px;
          border-bottom: 1px solid var(--glass-border);
          padding-bottom: 10px;
        }
        .hud-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-size: 0.75rem;
        }
        .hud-row span:first-child { opacity: 0.5; }
        .hud-row .value { font-family: monospace; color: #fff; }
      `}</style>
    </section>
  )
}
