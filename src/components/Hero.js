export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-status-pill">
          <span className="status-indicator-dot" />
          <span>Available for New Opportunities</span>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="highlight-text">Manish Kumar</span>
        </h1>

        <p className="hero-subtitle">
          Laravel / PHP Backend Developer
        </p>

        <p className="hero-description">
          Backend developer with <strong>2.5+ years of experience</strong> building secure, scalable web applications,
          robust RESTful APIs, and relational database systems. Proficient in Laravel, MySQL, WordPress backend customization,
          Stripe payment workflows, and cloud hosting management.
        </p>

        <div className="hero-cta-group">
          <button className="btn btn-primary" onClick={() => scrollTo('#projects')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            View Projects
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('#contact')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3.02a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.97-.96a2 2 0 0 1 2.11-.46c.91.34 1.86.57 2.82.7a2 2 0 0 1 1.73 2.02z"/>
            </svg>
            Get In Touch
          </button>
        </div>

        <div className="hero-contact-strip">
          <a href="tel:9507262310" className="contact-pill" title="Call Manish Kumar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3.02a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.97-.96a2 2 0 0 1 2.11-.46c.91.34 1.86.57 2.82.7a2 2 0 0 1 1.73 2.02z"/>
            </svg>
            <span>+91 9507262310</span>
          </a>

          <a href="mailto:manishkr211120002@gmail.com" className="contact-pill" title="Email Manish Kumar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>manishkr211120002@gmail.com</span>
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-pill" title="LinkedIn Profile">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-pill" title="GitHub Profile">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
