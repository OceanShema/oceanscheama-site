import { useState, useMemo } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Custom icons for maritime clusters
const getClusterIcon = (age: number) => {
  const color = age < 3 ? '#2dd4bf' : age < 7 ? '#fbbf24' : '#64748b';
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background-color: ${color}; width: 12px; height: 12px; border-radius: 50%; box-shadow: 0 0 10px ${color}; border: 2px solid rgba(255,255,255,0.5);"></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6]
  });
};

const PORTS = {
  ST_JOHNS: { name: "St. John's", pos: [47.5615, -52.7126] as [number, number] },
  HALIFAX: { name: "Halifax", pos: [44.6488, -63.5752] as [number, number] }
};

const getDistance = (p1: [number, number], p2: [number, number]) => {
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2)) * 111;
};

// Helper to generate realistic operational clusters
const generateClusters = (port: any, count: number, typeList: string[], prefix: string) => {
  const clusters = [];
  const today = new Date();
  
  for (let i = 0; i < count; i++) {
    // Generate clusters along the continental shelf
    const latOffset = (Math.random() - 0.5) * 8;
    const lngOffset = (Math.random() * 8) + 2; // Move away from coast
    
    const clusterPos: [number, number] = [port.pos[0] + latOffset, port.pos[1] + lngOffset];
    
    // Simple filter to keep them in the ocean (East of ports)
    if (clusterPos[1] < -65) continue; 

    const distanceKm = getDistance(port.pos, clusterPos);
    const type = typeList[Math.floor(Math.random() * typeList.length)];
    const age = Math.floor(Math.random() * 14);
    
    const clusterDate = new Date();
    clusterDate.setDate(today.getDate() - age);

    clusters.push({
      id: `${prefix}-${i}`,
      name: type,
      pos: clusterPos,
      date: clusterDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      distance: Math.round(distanceKm),
      age: age,
      fuelEfficiency: (85 + Math.random() * 15).toFixed(1) + "%",
      port: port
    });
  }
  return clusters;
};

const opTypes = ["High-Yield Stay", "Efficiency Corridor", "Thermal Front Cluster", "Deep-Sea Operations Zone", "Bank Edge Operations"];

export const MaritimeMap = () => {
  const [hoveredCluster, setHoveredCluster] = useState<any>(null)

  const clusters = useMemo(() => [
    ...generateClusters(PORTS.ST_JOHNS, 25, opTypes, "NL"),
    ...generateClusters(PORTS.HALIFAX, 25, opTypes, "NS")
  ], []);

  return (
    <section id="maritime-map" className="maritime-map-section">
      <div className="section-header">
        <h2 className="section-title">Global <span className="text-gradient">Operational Matrix</span></h2>
        <p className="section-subtitle">Real-time visualization of vessel operational footprints and efficiency corridors.</p>
      </div>

      <div className="map-wrapper glass">
        <MapContainer 
          center={[45, -55]} 
          zoom={5} 
          style={{ height: '700px', width: '100%', borderRadius: '20px' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
          
          {hoveredCluster && (
            <Polyline 
              positions={[hoveredCluster.port.pos, hoveredCluster.pos]} 
              pathOptions={{ color: '#2dd4bf', weight: 1, dashArray: '5, 10', opacity: 0.5 }} 
            />
          )}

          {clusters.map((s) => (
            <Marker 
              key={s.id} 
              position={s.pos} 
              icon={getClusterIcon(s.age)}
              eventHandlers={{
                mouseover: () => setHoveredCluster(s),
                mouseout: () => setHoveredCluster(null),
              }}
            >
              <Popup>
                <div className="map-popup">
                  <h3>{s.id}</h3>
                  <div className="popup-row"><span>ZONE:</span> <strong>{s.name}</strong></div>
                  <div className="popup-row"><span>LOGGED:</span> <span>{s.date}</span></div>
                  <div className="popup-row"><span>FUEL EFFICIENCY:</span> <span style={{color: '#2dd4bf'}}>{s.fuelEfficiency}</span></div>
                  <div className="popup-row"><span>FROM:</span> <span>{s.port.name} ({s.distance}km)</span></div>
                  <div className="popup-footer">
                    Vessel footprint verified.
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        <div className="map-legend-overlay glass">
          <div className="legend-title">FOOTPRINT AGE</div>
          <div className="legend-item"><span className="dot hot"></span> Active (0-3 Days)</div>
          <div className="legend-item"><span className="dot warm"></span> Recent (4-7 Days)</div>
          <div className="legend-item"><span className="dot cold"></span> Historical (8+ Days)</div>
        </div>
      </div>

      <style>{`
        .maritime-map-section { padding: 100px 20px; }
        .map-wrapper { position: relative; border-radius: 24px; padding: 10px; }
        .map-popup h3 { color: var(--seafoam); font-size: 0.9rem; margin-bottom: 10px; letter-spacing: 1px; }
        .popup-row { display: flex; justify-content: space-between; font-size: 0.75rem; margin-bottom: 6px; }
        .popup-row span { opacity: 0.6; }
        .popup-footer { margin-top: 12px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.65rem; font-weight: 800; color: var(--seafoam); text-transform: uppercase; }
        
        .map-legend-overlay {
          position: absolute;
          bottom: 40px;
          left: 40px;
          z-index: 1000;
          padding: 20px;
          width: 200px;
        }
        .legend-title { font-size: 0.7rem; font-weight: 800; margin-bottom: 12px; opacity: 0.5; letter-spacing: 1px; }
        .legend-item { display: flex; align-items: center; gap: 10px; font-size: 0.75rem; margin-bottom: 8px; }
        .dot { width: 8px; height: 8px; border-radius: 50%; }
        .dot.hot { background: #2dd4bf; box-shadow: 0 0 10px #2dd4bf; }
        .dot.warm { background: #fbbf24; box-shadow: 0 0 10px #fbbf24; }
        .dot.cold { background: #64748b; }

        .leaflet-container { background: #000b1a !important; }
        .leaflet-popup-content-wrapper { background: rgba(0, 11, 26, 0.9) !important; color: #fff !important; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px !important; }
        .leaflet-popup-tip { background: rgba(0, 11, 26, 0.9) !important; }
      `}</style>
    </section>
  )
}
