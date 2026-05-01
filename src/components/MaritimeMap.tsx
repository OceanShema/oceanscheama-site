import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Custom marker icon to match OceanSchema branding
const oceanIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color: #2dd4bf; width: 10px; height: 10px; border-radius: 50%; box-shadow: 0 0 10px #2dd4bf; border: 1px solid white;'></div>",
  iconSize: [10, 10],
  iconAnchor: [5, 5]
})

export const MaritimeMap = () => {
  const center: [number, number] = [28.0, -20.0]
  
  // Generating 50 proprietary strike nodes across the deep Atlantic grid
  const strikes = [
    { id: "STRK-01", pos: [27.5, -19.8] as [number, number], session: "VOYAGE-712", date: "2026.04.01" },
    { id: "STRK-02", pos: [28.2, -20.5] as [number, number], session: "VOYAGE-712", date: "2026.04.02" },
    { id: "STRK-03", pos: [29.0, -19.0] as [number, number], session: "VOYAGE-804", date: "2026.04.05" },
    { id: "STRK-04", pos: [26.5, -21.2] as [number, number], session: "VOYAGE-705", date: "2026.04.06" },
    { id: "STRK-05", pos: [27.1, -18.5] as [number, number], session: "VOYAGE-804", date: "2026.04.08" },
    { id: "STRK-06", pos: [29.5, -21.8] as [number, number], session: "VOYAGE-910", date: "2026.04.10" },
    { id: "STRK-07", pos: [28.8, -20.1] as [number, number], session: "VOYAGE-712", date: "2026.04.12" },
    { id: "STRK-08", pos: [27.9, -19.3] as [number, number], session: "VOYAGE-815", date: "2026.04.15" },
    { id: "STRK-09", pos: [26.8, -20.7] as [number, number], session: "VOYAGE-705", date: "2026.04.18" },
    { id: "STRK-10", pos: [28.4, -21.5] as [number, number], session: "VOYAGE-910", date: "2026.04.20" },
    { id: "STRK-11", pos: [29.2, -18.9] as [number, number], session: "VOYAGE-804", date: "2026.04.22" },
    { id: "STRK-12", pos: [27.3, -20.4] as [number, number], session: "VOYAGE-712", date: "2026.04.25" },
    { id: "STRK-13", pos: [28.1, -19.7] as [number, number], session: "VOYAGE-815", date: "2026.04.28" },
    { id: "STRK-14", pos: [26.9, -21.1] as [number, number], session: "VOYAGE-705", date: "2026.05.01" },
    { id: "STRK-15", pos: [29.7, -20.5] as [number, number], session: "VOYAGE-910", date: "2026.05.03" },
    { id: "STRK-16", pos: [28.5, -18.2] as [number, number], session: "VOYAGE-804", date: "2026.05.05" },
    { id: "STRK-17", pos: [27.7, -19.9] as [number, number], session: "VOYAGE-712", date: "2026.05.08" },
    { id: "STRK-18", pos: [28.3, -20.8] as [number, number], session: "VOYAGE-815", date: "2026.05.10" },
    { id: "STRK-19", pos: [26.6, -21.4] as [number, number], session: "VOYAGE-705", date: "2026.05.12" },
    { id: "STRK-20", pos: [29.4, -19.5] as [number, number], session: "VOYAGE-910", date: "2026.05.15" },
    { id: "STRK-21", pos: [28.9, -18.7] as [number, number], session: "VOYAGE-804", date: "2026.05.18" },
    { id: "STRK-22", pos: [27.2, -20.2] as [number, number], session: "VOYAGE-712", date: "2026.05.20" },
    { id: "STRK-23", pos: [28.0, -19.6] as [number, number], session: "VOYAGE-815", date: "2026.05.22" },
    { id: "STRK-24", pos: [26.4, -21.0] as [number, number], session: "VOYAGE-705", date: "2026.05.25" },
    { id: "STRK-25", pos: [29.8, -21.3] as [number, number], session: "VOYAGE-910", date: "2026.05.28" },
    { id: "STRK-26", pos: [28.6, -18.4] as [number, number], session: "VOYAGE-804", date: "2026.06.01" },
    { id: "STRK-27", pos: [27.4, -19.5] as [number, number], session: "VOYAGE-712", date: "2026.06.03" },
    { id: "STRK-28", pos: [28.2, -20.3] as [number, number], session: "VOYAGE-815", date: "2026.06.05" },
    { id: "STRK-29", pos: [26.3, -20.9] as [number, number], session: "VOYAGE-705", date: "2026.06.08" },
    { id: "STRK-30", pos: [29.5, -19.2] as [number, number], session: "VOYAGE-910", date: "2026.06.10" },
    { id: "STRK-31", pos: [28.8, -18.5] as [number, number], session: "VOYAGE-804", date: "2026.06.12" },
    { id: "STRK-32", pos: [27.1, -20.6] as [number, number], session: "VOYAGE-712", date: "2026.06.15" },
    { id: "STRK-33", pos: [28.0, -19.9] as [number, number], session: "VOYAGE-815", date: "2026.06.18" },
    { id: "STRK-34", pos: [26.2, -21.5] as [number, number], session: "VOYAGE-705", date: "2026.06.20" },
    { id: "STRK-35", pos: [29.9, -20.8] as [number, number], session: "VOYAGE-910", date: "2026.06.22" },
    { id: "STRK-36", pos: [28.4, -18.1] as [number, number], session: "VOYAGE-804", date: "2026.06.25" },
    { id: "STRK-37", pos: [27.6, -19.2] as [number, number], session: "VOYAGE-712", date: "2026.06.28" },
    { id: "STRK-38", pos: [28.3, -20.6] as [number, number], session: "VOYAGE-815", date: "2026.07.01" },
    { id: "STRK-39", pos: [26.7, -21.8] as [number, number], session: "VOYAGE-705", date: "2026.07.03" },
    { id: "STRK-40", pos: [29.3, -19.8] as [number, number], session: "VOYAGE-910", date: "2026.07.05" },
    { id: "STRK-41", pos: [28.7, -18.9] as [number, number], session: "VOYAGE-804", date: "2026.07.08" },
    { id: "STRK-42", pos: [27.0, -20.1] as [number, number], session: "VOYAGE-712", date: "2026.07.10" },
    { id: "STRK-43", pos: [28.1, -19.5] as [number, number], session: "VOYAGE-815", date: "2026.07.12" },
    { id: "STRK-44", pos: [26.5, -21.3] as [number, number], session: "VOYAGE-705", date: "2026.07.15" },
    { id: "STRK-45", pos: [29.6, -21.1] as [number, number], session: "VOYAGE-910", date: "2026.07.18" },
    { id: "STRK-46", pos: [28.5, -18.6] as [number, number], session: "VOYAGE-804", date: "2026.07.20" },
    { id: "STRK-47", pos: [27.8, -19.4] as [number, number], session: "VOYAGE-712", date: "2026.07.22" },
    { id: "STRK-48", pos: [28.4, -20.9] as [number, number], session: "VOYAGE-815", date: "2026.07.25" },
    { id: "STRK-49", pos: [26.1, -21.7] as [number, number], session: "VOYAGE-705", date: "2026.07.28" },
    { id: "STRK-50", pos: [29.2, -19.1] as [number, number], session: "VOYAGE-910", date: "2026.08.01" },
  ]

  const voyagePath: [number, number][] = [
    [27.5, -19.8], [27.8, -20.1], [28.2, -20.5], [28.8, -20.1], [29.5, -21.8]
  ]

  return (
    <section id="map" className="map-section">
      <div className="section-header">
        <h2 className="section-title">The <span className="text-gradient">Operational Map</span></h2>
        <p className="section-subtitle">A robust visualization of 50 proprietary strike nodes across the deep Atlantic grid.</p>
      </div>

      <div className="map-wrapper glass">
        <MapContainer 
          center={center} 
          zoom={7} 
          scrollWheelZoom={true} 
          style={{ height: '700px', width: '100%', borderRadius: '16px' }}
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
