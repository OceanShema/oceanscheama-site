export const Navbar = () => {
  return (
    <header className="navbar glass">
      <div className="nav-content">
        <div className="logo">
          <span className="logo-icon">⚓</span>
          <h1 className="logo-text">OceanSchema</h1>
        </div>
        <div className="nav-links">
          <a href="#features">The Advantage</a>
          <a href="#vision">The Vision</a>
          <a href="#access" className="btn-primary">Request Access</a>
        </div>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1000px;
          z-index: 1000;
          padding: 12px 24px;
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
          letter-spacing: -0.5px;
        }
        .logo-icon {
          font-size: 1.5rem;
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
      `}</style>
    </header>
  )
}
