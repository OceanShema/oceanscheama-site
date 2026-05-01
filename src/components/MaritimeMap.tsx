import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Custom marker icon to match OceanSchema branding
const oceanIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color: #2dd4bf; width: 10px; height: 10px; border-radius: 50%; box-shadow: 0 0 10px #2dd4bf; border: 2px solid white;'></div>",
  iconSize: [10, 10],
  iconAnchor: [5, 5]
})

export const MaritimeMap = () => {
  // Center moved to Mid-Atlantic (Total Isolation Zone)
  const center: [number, number] = [38.0, -45.0]
  
  // Generating 50 proprietary strike nodes in the Deep-Sea Atlantic Theater
  // Range: Lat [35, 42], Lng [-52, -38]
  const strikes = [
    { id: "STRK-01", pos: [38.5, -44.8] as [number, number], session: "VOYAGE-712", date: "2026.04.01" },
    { id: "STRK-02", pos: [39.2, -45.5] as [number, number], session: "VOYAGE-712", date: "2026.04.02" },
    { id: "STRK-03", pos: [40.0, -43.0] as [number, number], session: "VOYAGE-804", date: "2026.04.05" },
    { id: "STRK-04", pos: [37.5, -46.2] as [number, number], session: "VOYAGE-705", date: "2026.04.06" },
    { id: "STRK-05", pos: [38.1, -42.5] as [number, number], session: "VOYAGE-804", date: "2026.04.08" },
    { id: "STRK-06", pos: [40.5, -46.8] as [number, number], session: "VOYAGE-910", date: "2026.04.10" },
    { id: "STRK-07", pos: [39.8, -45.1] as [number, number], session: "VOYAGE-712", date: "2026.04.12" },
    { id: "STRK-08", pos: [38.9, -43.3] as [number, number], session: "VOYAGE-815", date: "2026.04.15" },
    { id: "STRK-09", pos: [37.8, -45.7] as [number, number], session: "VOYAGE-705", date: "2026.04.18" },
    { id: "STRK-10", pos: [39.4, -46.5] as [number, number], session: "VOYAGE-910", date: "2026.04.20" },
    { id: "STRK-11", pos: [40.2, -42.9] as [number, number], session: "VOYAGE-804", date: "2026.04.22" },
    { id: "STRK-12", pos: [38.3, -45.4] as [number, number], session: "VOYAGE-712", date: "2026.04.25" },
    { id: "STRK-13", pos: [39.1, -44.7] as [number, number], session: "VOYAGE-815", date: "2026.04.28" },
    { id: "STRK-14", pos: [37.9, -46.1] as [number, number], session: "VOYAGE-705", date: "2026.05.01" },
    { id: "STRK-15", pos: [40.7, -45.5] as [number, number], session: "VOYAGE-910", date: "2026.05.03" },
    { id: "STRK-16", pos: [39.5, -41.2] as [number, number], session: "VOYAGE-804", date: "2026.05.05" },
    { id: "STRK-17", pos: [38.7, -44.9] as [number, number], session: "VOYAGE-712", date: "2026.05.08" },
    { id: "STRK-18", pos: [39.3, -45.8] as [number, number], session: "VOYAGE-815", date: "2026.05.10" },
    { id: "STRK-19", pos: [37.6, -46.4] as [number, number], session: "VOYAGE-705", date: "2026.05.12" },
    { id: "STRK-20", pos: [40.4, -43.5] as [number, number], session: "VOYAGE-910", date: "2026.05.15" },
    { id: "STRK-21", pos: [39.9, -42.7] as [number, number], session: "VOYAGE-804", date: "2026.05.18" },
    { id: "STRK-22", pos: [38.2, -45.2] as [number, number], session: "VOYAGE-712", date: "2026.05.20" },
    { id: "STRK-23", pos: [39.0, -44.6] as [number, number], session: "VOYAGE-815", date: "2026.05.22" },
    { id: "STRK-24", pos: [37.4, -46.0] as [number, number], session: "VOYAGE-705", date: "2026.05.25" },
    { id: "STRK-25", pos: [40.8, -46.3] as [number, number], session: "VOYAGE-910", date: "2026.05.28" },
    { id: "STRK-26", pos: [39.6, -43.4] as [number, number], session: "VOYAGE-804", date: "2026.06.01" },
    { id: "STRK-27", pos: [38.4, -44.5] as [number, number], session: "VOYAGE-712", date: "2026.06.03" },
    { id: "STRK-28", pos: [39.2, -45.3] as [number, number], session: "VOYAGE-815", date: "2026.06.05" },
    { id: "STRK-29", pos: [37.3, -45.9] as [number, number], session: "VOYAGE-705", date: "2026.06.08" },
    { id: "STRK-30", pos: [40.5, -44.2] as [number, number], session: "VOYAGE-910", date: "2026.06.10" },
    { id: "STRK-31", pos: [39.8, -43.5] as [number, number], session: "VOYAGE-804", date: "2026.06.12" },
    { id: "STRK-32", pos: [38.1, -45.6] as [number, number], session: "VOYAGE-712", date: "2026.06.15" },
    { id: "STRK-33", pos: [39.0, -44.9] as [number, number], session: "VOYAGE-815", date: "2026.06.18" },
    { id: "STRK-34", pos: [37.2, -46.5] as [number, number], session: "VOYAGE-705", date: "2026.06.20" },
    { id: "STRK-35", pos: [40.9, -45.8] as [number, number], session: "VOYAGE-910", date: "2026.06.22" },
    { id: "STRK-36", pos: [39.4, -42.1] as [number, number], session: "VOYAGE-804", date: "2026.06.25" },
    { id: "STRK-37", pos: [38.6, -44.2] as [number, number], session: "VOYAGE-712", date: "2026.06.28" },
    { id: "STRK-38", pos: [39.3, -45.6] as [number, number], session: "VOYAGE-815", date: "2026.07.01" },
    { id: "STRK-39", pos: [37.7, -46.8] as [number, number], session: "VOYAGE-705", date: "2026.07.03" },
    { id: "STRK-40", pos: [40.3, -44.8] as [number, number], session: "VOYAGE-910", date: "2026.07.05" },
    { id: "STRK-41", pos: [39.7, -43.9] as [number, number], session: "VOYAGE-804", date: "2026.07.08" },
    { id: "STRK-42", pos: [38.0, -45.1] as [number, number], session: "VOYAGE-712", date: "2026.07.10" },
    { id: "STRK-43", pos: [39.1, -44.5] as [number, number], session: "VOYAGE-815", date: "2026.07.12" },
    { id: "STRK-44", pos: [37.5, -46.3] as [number, number], session: "VOYAGE-705", date: "2026.07.15" },
    { id: "STRK-45", pos: [40.6, -46.1] as [number, number], session: "VOYAGE-910", date: "2026.07.18" },
    { id: "STRK-46", pos: [39.5, -43.6] as [number, number], session: "VOYAGE-804", date: "2026.07.20" },
    { id: "STRK-47", pos: [38.8, -44.4] as [number, number], session: "VOYAGE-712", date: "2026.07.22" },
    { id: "STRK-48", pos: [39.4, -45.9] as [number, number], session: "VOYAGE-815", date: "2026.07.25" },
    { id: "STRK-49", pos: [37.1, -46.7] as [number, number], session: "VOYAGE-705", date: "2026.07.28" },
    { id: "STRK-50", pos: [40.2, -44.1] as [number, number], session: "VOYAGE-910", date: "2026.08.01" },
  ]

  const voyagePath: [number, number][] = [
    [38.5, -44.8], [39.0, -45.1], [39.5, -45.5], [40.0, -45.8], [40.5, -46.2]
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
          zoom={6} 
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
