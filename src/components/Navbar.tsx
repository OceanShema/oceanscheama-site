import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar glass">
      <div className="nav-content">
        <div className="logo">
          <img src="/logo.png" alt="OceanSchema Logo" style={{ height: '60px', width: 'auto' }} />
          <h1 className="logo-text">OceanSchema</h1>
        </div>
        
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#features" onClick={() => setIsMenuOpen(false)}>The Advantage</a>
          <a href="#vision" onClick={() => setIsMenuOpen(false)}>The Vision</a>
          <a href="#access" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Request Access</a>
        </div>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 95%;
          max-width: 1000px;
          z-index: 1000;
          padding: 8px 24px;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 1.2rem;
        }
        .logo-text {
          white-space: nowrap;
        }
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.8;
          transition: opacity 0.2s;
        }
        .nav-links a:hover {
          opacity: 1;
        }

        @media (max-width: 850px) {
          .menu-toggle {
            display: block;
          }
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(0, 11, 26, 0.95);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 40px 20px;
            gap: 24px;
            border-radius: 0 0 16px 16px;
            border: 1px solid var(--glass-border);
            border-top: none;
          }
          .nav-links.open {
            display: flex;
          }
          .logo-text {
            font-size: 1rem;
          }
          .logo img {
            height: 45px !important;
          }
        }
      `}</style>
    </header>
  )
}
