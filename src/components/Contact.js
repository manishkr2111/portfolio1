import { useState } from 'react';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-heading">Contact Information</h2>
          <p className="section-subtext">
            Feel free to reach out for backend development roles, API integrations, or collaboration opportunities.
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact Details Column */}
          <div className="contact-details-col">
            <h3 className="contact-col-title">Let's Discuss Your Project</h3>
            <p className="contact-col-desc">
              I am actively looking for backend engineering opportunities where I can apply my Laravel, PHP, MySQL,
              and API development experience to build reliable and scalable software.
            </p>

            <div className="contact-cards-stack">
              {/* Phone Card */}
              <div className="contact-info-card">
                <div className="contact-icon-bubble">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3.02a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.97-.96a2 2 0 0 1 2.11-.46c.91.34 1.86.57 2.82.7a2 2 0 0 1 1.73 2.02z"/>
                  </svg>
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Direct Phone</span>
                  <a href="tel:9507262310" className="contact-card-link">+91 9507262310</a>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => handleCopy('9507262310', 'phone')}
                  title="Copy Phone Number"
                >
                  {copiedType === 'phone' ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Email Card */}
              <div className="contact-info-card">
                <div className="contact-icon-bubble">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Email Address</span>
                  <a href="mailto:manishkr211120002@gmail.com" className="contact-card-link">
                    manishkr211120002@gmail.com
                  </a>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => handleCopy('manishkr211120002@gmail.com', 'email')}
                  title="Copy Email Address"
                >
                  {copiedType === 'email' ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Professional Links */}
              <div className="social-links-grid">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-card"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                  </svg>
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-col">
            <div className="form-card">
              <h3 className="form-card-title">Send a Message</h3>

              {formSubmitted && (
                <div className="form-alert-success">
                  <span className="success-icon">✓</span>
                  <span>Thank you! Your message has been received. I will reply shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form-inner">
                <div className="form-field">
                  <label htmlFor="user-name">Your Name</label>
                  <input
                    id="user-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="user-email">Email Address</label>
                  <input
                    id="user-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="user-subject">Subject</label>
                  <input
                    id="user-subject"
                    type="text"
                    required
                    placeholder="e.g. Job Opportunity / Project Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="user-message">Message</label>
                  <textarea
                    id="user-message"
                    rows="4"
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  <span>Send Message</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
