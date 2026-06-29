import React, { useState } from 'react';
import './Contact.css';

export const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/xdabgqey", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      form.reset();
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container glass">
        <div className="contact-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="contact-subtitle">
            Get in touch to learn more about our AI solutions for the maritime industry.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" required placeholder="Your Name" className="glass-input" />
          </div>
          
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" required placeholder="your.email@example.com" className="glass-input" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows={5} placeholder="How can we help you?" className="glass-input"></textarea>
          </div>

          <button type="submit" className="btn-primary submit-btn">Send Message</button>
          
          {status && <div className="form-status">{status}</div>}
        </form>
      </div>
    </section>
  );
};
