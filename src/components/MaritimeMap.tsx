import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Custom marker icon to match OceanSchema branding
const oceanIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color: #2dd4bf; width: 12px; height: 12px; border-radius: 50%; box-shadow: 0 0 15px #2dd4bf; border: 2px solid white;'></div>",
  iconSize: [12, 12],
  iconAnchor: [6, 6]
})

export const MaritimeMap = () => {
  const center: [number, number] = [28.5, -12.0]
  
  const strikes = [
    { id: "STRK-01", pos: [28.4, -12.1] as [number, number], session: "VOYAGE-712", date: "2026.04.12" },
    { id: "STRK-02", pos: [28.8, -12.5] as [number, number], session: "VOYAGE-712", date: "2026.04.12" },
    { id: "STRK-03", pos: [29.1, -11.8] as [number, number], session: "VOYAGE-804", date: "2026.04.18" },
  ]

  const voyagePath: [number, number][] = [
    [28.4, -12.1],
    [28.6, -12.3],
    [28.8, -12.5]
  ]

  return (
    <section id="map" className="map-section">
      <div className="section-header">
        <h2 className="section-title">The <span className="text-gradient">Operational Map</span></h2>
        <p className="section-subtitle">A fully interactive, zoomable interface of your proprietary maritime ledger.</p>
      </div>

      <div className="map-wrapper glass">
        <MapContainer 
          center={center} 
          zoom={8} 
          scrollWheelZoom={true} 
          style={{ height: '600px', width: '100%', borderRadius: '16px' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />

          <Polyline positions={voyagePath} pathOptions={{ color: '#2dd4bf', weight: 2, dashArray: '5, 10' }} />

          {strikes.map((s) => (
            <Marker key={s.id} position={s.pos} icon={oceanIcon}>
              <Popup>
                <div className="map-popup">
                  <div className="popup-header">LEDGER ENTRY: {s.id}</div>
                  <div className="popup-row"><span>SESSION:</span> {s.session}</div>
                  <div className="popup-row"><span>TEMPORAL:</span> {s.date}</div>
                  <div className="popup-row"><span>STATUS:</span> HARDENED</div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <style>{`
        .map-section { padding-top: 100px; }
        .map-wrapper {
          margin-top: 40px;
          padding: 10px;
          border: 1px solid var(--glass-border);
          overflow: hidden;
        }
        .leaflet-container {
          background: #000b1a !important;
        }
        .map-popup {
          color: #000b1a;
          font-family: 'Inter', sans-serif;
        }
        .popup-header {
          font-weight: 800;
          font-size: 0.7rem;
          color: #003366;
          border-bottom: 1px solid #eee;
          padding-bottom: 5px;
          margin-bottom: 8px;
          letter-spacing: 1px;
        }
        .popup-row {
          font-size: 0.8rem;
          margin-bottom: 4px;
        }
        .popup-row span {
          font-weight: 600;
          opacity: 0.6;
        }
      `}</style>
    </section>
  )
}
