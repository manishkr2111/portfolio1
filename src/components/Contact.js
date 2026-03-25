import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contacts = [
    {
      href: 'tel:9507262310',
      iconClass: 'ci-phone',
      icon: '📞',
      label: 'Phone',
      value: '+91 9507262310',
    },
    {
      href: 'mailto:manishkr21112000@gmail.com',
      iconClass: 'ci-email',
      icon: '✉️',
      label: 'Email',
      value: 'manishkr21112000@gmail.com',
    },
    {
      href: 'https://linkedin.com/in/manishkr2111',
      iconClass: 'ci-linkedin',
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/manishkr2111',
      target: '_blank',
    },
    {
      href: 'https://github.com/manishkr2111',
      iconClass: 'ci-github',
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/manishkr2111',
      target: '_blank',
    },
  ];

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="section-inner">
        <div className="section-tag fade-in-up">Contact</div>
        <h2 className="section-title fade-in-up">
          Let's <span>Work Together</span>
        </h2>
        <p className="section-subtitle fade-in-up">
          Whether you have a project in mind or just want to say hi — my inbox is always open!
        </p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info fade-in-up">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="contact-item"
                target={c.target || '_self'}
                rel={c.target ? 'noreferrer' : undefined}
              >
                <div className={`contact-item-icon ${c.iconClass}`}>{c.icon}</div>
                <div>
                  <div className="contact-item-label">{c.label}</div>
                  <div className="contact-item-value">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="contact-form fade-in-up" style={{ transitionDelay: '0.15s' }}>
            <h3>Send a Message</h3>
            {submitted && (
              <div style={{ textAlign: 'center', padding: '1rem', color: 'var(--accent-secondary)', fontWeight: 600, fontSize: '1rem' }}>
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input id="contact-name" type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input id="contact-email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" placeholder="Tell me about your project..." required />
              </div>
              <button type="submit" className="form-submit">
                🚀 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
