import React, { useState } from 'react';

export const Contact = () => {
  const [status, setStatus] = useState("");

  // You will replace 'your-form-id' with the ID you get from Formspree
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    setStatus("TRANSMITTING...");

    const response = await fetch("https://formspree.io/f/xdabgqey", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus("SIGNAL RECEIVED. WE WILL CONTACT YOU.");
      form.reset();
    } else {
      setStatus("TRANSMISSION ERROR. PLEASE TRY AGAIN.");
    }
  };

  return (
    <section id="access" className="contact-section">
      <div className="contact-container glass">
        <div className="contact-header">
          <h2 className="section-title">Request <span className="text-gradient">Surgical Precision</span></h2>
          <p className="contact-subtitle">
            OceanSchema is currently in limited deployment for elite fleets. 
            Apply for access to the Intelligence Command.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>NAME</label>
            <input type="text" name="name" required placeholder="Captain's Name" className="glass-input" />
          </div>
          
          <div className="form-group">
            <label>EMAIL</label>
            <input type="email" name="email" required placeholder="official@fleet.com" className="glass-input" />
          </div>

          <div className="form-group">
            <label>MESSAGE (OPTIONAL)</label>
            <textarea name="message" rows={4} placeholder="Describe your fleet operations..." className="glass-input"></textarea>
          </div>

          <button type="submit" className="btn-primary submit-btn">Request Access</button>
          
          {status && <div className="form-status">{status}</div>}
        </form>
      </div>

      <style>{`
        .contact-section {
          padding: 100px 20px;
          display: flex;
          justify-content: center;
        }
        .contact-container {
          width: 100%;
          max-width: 600px;
          padding: 60px;
        }
        .contact-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .contact-subtitle {
          opacity: 0.6;
          margin-top: 10px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: var(--seafoam);
        }
        .glass-input {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          padding: 14px;
          color: #fff;
          font-family: inherit;
          transition: border-color 0.3s;
        }
        .glass-input:focus {
          outline: none;
          border-color: var(--seafoam);
        }
        .submit-btn {
          width: 100%;
          border: none;
          cursor: pointer;
          margin-top: 10px;
        }
        .form-status {
          text-align: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--seafoam);
          letter-spacing: 1px;
          margin-top: 20px;
        }
      `}</style>
    </section>
  );
};
