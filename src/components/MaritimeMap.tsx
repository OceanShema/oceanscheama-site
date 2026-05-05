import { useState, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Polyline, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Custom marker icon for Profit Points (Color-Coded by Age)
const getStrikeIcon = (type: string, age: number) => {
  const colors = ["#2dd4bf", "#facc15", "#60a5fa"]; // Today, Yesterday, 2 Days Ago
  const color = colors[age] || colors[2];
  
  return new L.DivIcon({
    className: 'custom-div-icon',
    html: `
      <div style="
        width: 12px; 
        height: 12px; 
        background-color: ${color}; 
        border: 2px solid white; 
        box-shadow: 0 0 10px ${color}66;
        ${type === 'FISH' ? 'border-radius: 50%;' : type === 'TRAP' ? 'transform: rotate(45deg);' : 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%);'}
      "></div>
    `,
    iconSize: [12, 12],
    iconAnchor: [6, 6]
  });
}

// Custom icon for the Command Center (Professional Lighthouse/Tower)
const homeIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 8px rgba(13, 148, 136, 0.5));">
      <path d="M12 2L15 8H9L12 2Z" fill="#0d9488"/>
      <rect x="10" y="8" width="4" height="12" fill="#0f172a"/>
      <rect x="9" y="18" width="6" height="2" fill="#0f172a"/>
      <circle cx="12" cy="5" r="1.5" fill="#2dd4bf">
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  `,
  iconSize: [30, 30],
  iconAnchor: [15, 15]
})

// Helper to calculate distance in KM
const getDistance = (p1: [number, number], p2: [number, number]) => {
  const R = 6371; // Earth's radius in km
  const dLat = (p2[0] - p1[0]) * Math.PI / 180;
  const dLon = (p2[1] - p1[1]) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(p1[0] * Math.PI / 180) * Math.cos(p2[0] * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return Math.round(R * c);
}

// Helper to generate realistic strikes (Specifically tuned to stay in deep water)
const generateStrikes = (port: any, count: number, speciesList: string[], prefix: string) => {
  const methods = ["Bottom Trawling", "Longlining", "Handlining", "Potting (Traps)", "Gillnetting"];
  const today = new Date();
  
  return Array.from({ length: count }).map((_, i) => {
    let latOffset = (Math.random() - 0.5) * 3; 
    let lngOffset = (Math.random() * 6) + 3; 
    
    if (prefix === "NS") {
      latOffset = (Math.random() * -3) - 0.5;
      lngOffset = (Math.random() * 7) + 2.5; 
    }

    const strikePos: [number, number] = [port.pos[0] + latOffset, port.pos[1] + lngOffset];
    const fuel = Math.floor(200 + Math.random() * 600);
    const distanceKm = getDistance(port.pos, strikePos);
    const species = speciesList[Math.floor(Math.random() * speciesList.length)];
    
    // Split into 3 ages: 0 (Today), 1 (Yesterday), 2 (Day before)
    const age = i % 3;
    const strikeDate = new Date();
    strikeDate.setDate(today.getDate() - age);
    
    const isTrap = species.toLowerCase().includes('lobster') || species.toLowerCase().includes('crab');
    const isMethodology = i % 5 === 0;

    return {
      id: `${prefix}-${i}`,
      name: isMethodology ? `${methods[i % methods.length]}` : species,
      type: isMethodology ? 'GEAR' : (isTrap ? 'TRAP' : 'FISH'),
      age: age,
      method: isMethodology ? "Direct Strategy" : methods[Math.floor(Math.random() * methods.length)],
      pos: strikePos,
      date: strikeDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      fuel: `${fuel}L`,
      distance: distanceKm,
      port: port
    };
  });
}

const nlSpecies = ["Bluefin Tuna (XL)", "Atlantic Cod School", "Snow Crab Cluster", "Greenland Halibut", "Redfish Strike"];
const nsSpecies = ["Jumbo Lobster Bed", "Haddock Goldmine", "Scallop Bed (Prime)", "Swordfish Strike", "Pollock Run"];

export const MaritimeMap = () => {
  const [hoveredStrike, setHoveredStrike] = useState<any>(null)
  
  const PORTS = {
    ST_JOHNS: { name: "ST. JOHN'S COMMAND", pos: [47.5675, -52.7076] as [number, number] },
    HALIFAX: { name: "HALIFAX COMMAND", pos: [44.6488, -63.5752] as [number, number] }
  }

  // Use useMemo to ensure strikes are generated once and don't change on hover
  const strikes = useMemo(() => [
    ...generateStrikes(PORTS.ST_JOHNS, 25, nlSpecies, "NL"),
    ...generateStrikes(PORTS.HALIFAX, 25, nsSpecies, "NS")
  ], []);

  const center: [number, number] = [45.0, -58.0]

  return (
    <section id="map" className="map-section">
      <div className="section-header">
        <h2 className="section-title">The <span className="text-gradient">Profit Map</span></h2>
        <p className="section-subtitle" style={{ color: '#475569' }}>Visualize the straightest line between your home port and your biggest paydays.</p>
      </div>

      <div className="map-wrapper" style={{ border: '4px solid white', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
        <MapContainer 
          center={center} 
          zoom={5} 
          scrollWheelZoom={false} 
          style={{ height: '700px', width: '100%', borderRadius: '20px' }}
        >
          {/* Light Mode Tiles */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {/* Command Centers */}
          {Object.values(PORTS).map((p, i) => (
            <Marker key={i} position={p.pos} icon={homeIcon}>
              <Tooltip permanent direction="top" offset={[0, -10]}>
                <span style={{ fontWeight: 800, color: '#0f172a' }}>{p.name}</span>
              </Tooltip>
            </Marker>
          ))}

          {/* Connection Line on Hover to the correct port - interactive: false prevents flickering */}
          {hoveredStrike && (
            <Polyline 
              positions={[hoveredStrike.port.pos, hoveredStrike.pos]} 
              pathOptions={{ color: '#0d9488', weight: 3, dashArray: '10, 10', opacity: 0.6, interactive: false }} 
            />
          )}

          {strikes.map((s) => (
            <Marker 
              key={s.id} 
              position={s.pos} 
              icon={getStrikeIcon(s.type, s.age)}
              eventHandlers={{
                mouseover: (e) => {
                  setHoveredStrike(s);
                  e.target.openTooltip();
                },
                mouseout: (e) => {
                  setHoveredStrike(null);
                  e.target.closeTooltip();
                },
              }}
            >
              <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                <div className="map-popup">
                  <div className="popup-header">PROFIT SUMMARY</div>
                  <div className="popup-row"><span>{s.type === 'GEAR' ? 'METHOD:' : 'CATCH:'}</span> <strong>{s.name}</strong></div>
                  <div className="popup-row"><span>GEAR:</span> {s.method}</div>
                  <div className="popup-row"><span>DISTANCE:</span> <strong>{s.distance} KM / {Math.round(s.distance * 0.54)} NM</strong></div>
                  <div className="popup-row"><span>VOYAGE BURN:</span> <strong style={{ color: '#0d9488' }}>{s.fuel} (To & Fro)</strong></div>
                  <div className="popup-row" style={{ marginTop: '8px', fontSize: '0.7rem', fontStyle: 'italic', color: '#64748b' }}>
                    Surgical strike confirmed.
                  </div>
                </div>
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
        
        {/* Map Legend */}
        <div className="map-legend-overlay">
          <div className="legend-title">STRIKE AGE</div>
          <div className="legend-item"><span className="color-dot" style={{ backgroundColor: '#2dd4bf' }}></span> Today</div>
          <div className="legend-item"><span className="color-dot" style={{ backgroundColor: '#facc15' }}></span> Yesterday</div>
          <div className="legend-item"><span className="color-dot" style={{ backgroundColor: '#60a5fa' }}></span> 48 Hours Ago</div>
          
          <div className="legend-title" style={{ marginTop: '12px' }}>GEAR TYPE</div>
          <div className="legend-item"><span className="symbol circle"></span> Standard Catch</div>
          <div className="legend-item"><span className="symbol diamond"></span> Trap Deployment</div>
          <div className="legend-item"><span className="symbol triangle"></span> Operational Strategy</div>
        </div>
      </div>

      <style>{`
        .map-section { padding-top: 100px; padding-bottom: 100px; }
        .map-wrapper {
          margin-top: 40px;
          position: relative;
        }
        .color-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid white;
        }
        .map-legend-overlay {
          position: absolute;
          bottom: 30px;
          right: 30px;
          background: rgba(255, 255, 255, 0.9);
          padding: 15px;
          border-radius: 12px;
          z-index: 1000;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          border: 1px solid #e2e8f0;
          font-family: 'Inter', sans-serif;
        }
        .legend-title {
          font-size: 0.7rem;
          font-weight: 800;
          color: #64748b;
          margin-bottom: 10px;
          letter-spacing: 1px;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 6px;
        }
        .symbol {
          width: 10px;
          height: 10px;
          background: #0d9488;
          border: 1px solid white;
        }
        .symbol.circle { border-radius: 50%; }
        .symbol.diamond { transform: rotate(45deg); }
        .symbol.triangle { clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }
        
        .map-popup {
          color: #0f172a;
          font-family: 'Inter', sans-serif;
          min-width: 180px;
        }
        .popup-header {
          font-weight: 800;
          font-size: 0.75rem;
          color: #0d9488;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 8px;
          margin-bottom: 10px;
          letter-spacing: 1px;
        }
        .popup-row {
          font-size: 0.9rem;
          margin-bottom: 6px;
        }
        .popup-row span {
          font-weight: 600;
          opacity: 0.6;
          margin-right: 8px;
        }
        .leaflet-container {
          background: #f8fafc !important;
        }
      `}</style>
    </section>
  )
}
