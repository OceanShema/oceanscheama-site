import React, { useState } from 'react';
import './Section.css'; // For general section styling
import CalendlyEmbed from './CalendlyEmbed'; // Import the new component

const PartnerWithUs: React.FC = () => {
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
      setStatus("Message sent successfully! We will get back to you shortly.");
      form.reset();
    } else {
      setStatus("Failed to send message. Please ensure all fields are filled correctly.");
    }
  };

  return (
    <section id="partner-with-us" className="section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-title">Partner With Us</h2>
            <p className="section-paragraph">
                We are looking for forward-thinking maritime partners to join our pilot program. If you are interested in leveraging AI to improve your inspection operations, we want to hear from you.
            </p>
            <p className="section-paragraph">
                Let's work together to bring the future of marine intelligence to your operations.
            </p>
        </div>

        <div className="partner-layout">
            <div className="partner-box">
                <div className="contact-container glass">
                    <div className="contact-header">
                        <h3 className="section-title">Get in Touch</h3>
                        <p className="contact-subtitle">
                            Fill out the form below to connect with our team and explore collaboration opportunities.
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
                        <label>Company / Organization (Optional)</label>
                        <input type="text" name="company" placeholder="Your Company" className="glass-input" />
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea name="message" rows={5} placeholder="How can we help you?" className="glass-input"></textarea>
                    </div>

                    <button type="submit" className="btn-primary submit-btn">Send Message</button>
                    
                    {status && <div className="form-status">{status}</div>}
                    </form>
                </div>
            </div>
            <div className="partner-box">
                <div className="contact-container glass">
                    <div className="contact-header">
                        <h3 className="section-title">Schedule a Meeting</h3>
                    </div>
                    <div className="calendly-container">
                        <CalendlyEmbed url="https://calendly.com/abhijith-uwc-rw/30min" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;