export const OceanImage = () => {
  return (
    <div className="ocean-image-container glass">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="ocean-mesh">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0 0.1 0.2" />
            <feFuncG type="table" tableValues="0 0.2 0.4" />
            <feFuncB type="table" tableValues="0.1 0.4 0.6" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" opacity="0.6" />
        
        {/* Abstract "Vessel" or "Entity" symbol */}
        <path d="M 50 150 L 150 150 L 100 50 Z" fill="none" stroke="var(--seafoam)" strokeWidth="0.5" opacity="0.3" transform="translate(100, 100) rotate(45)" />
      </svg>
      <div className="image-overlay">
        <h3>The Sentinel at Sea</h3>
        <p>A proprietary perspective on the infinite horizon.</p>
      </div>
      <style>{`
        .ocean-image-container {
          height: 500px;
          width: 100%;
          position: relative;
          overflow: hidden;
          margin-top: 100px;
        }
        .ocean-mesh {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .image-overlay {
          position: absolute;
          bottom: 40px;
          left: 40px;
          z-index: 2;
        }
        .image-overlay h3 { font-size: 2rem; margin: 0; }
        .image-overlay p { opacity: 0.6; margin: 5px 0 0 0; }
      `}</style>
    </div>
  )
}
