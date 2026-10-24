export default function About() {
  const stats = [
    { number: '2.5+', label: 'Years Experience' },
    { number: '5+', label: 'Production Projects' },
    { number: '100%', label: 'Commitment to Quality' },
    { number: 'REST', label: 'API Architecture' },
  ];

  const highlights = [
    {
      title: 'Backend Engineering',
      desc: 'Expertise in PHP and Laravel, implementing modular MVC architecture, database models, queue workers, and automated business workflows.',
      icon: '⚙️',
    },
    {
      title: 'Payment Integration',
      desc: 'Deep hands-on experience integrating Stripe subscription billing, checkout sessions, webhook handlers, and wallet-based balance payment systems.',
      icon: '💳',
    },
    {
      title: 'Database Architecture',
      desc: 'Designing clean relational database schemas in MySQL with index optimization, constraints, queries, and efficient data integrity.',
      icon: '🗄️',
    },
    {
      title: 'Hosting & Deployment',
      desc: 'Managing live infrastructure on AWS EC2, Cloudflare, cPanel, aaPanel, DNS records, SSL certificates, and enterprise email setup (SPF/DKIM).',
      icon: '☁️',
    },
  ];

  return (
    <section className="section" id="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-heading">Professional Summary</h2>
          <p className="section-subtext">
            Focused on building secure, scalable, and maintainable backend solutions that deliver reliable performance.
          </p>
        </div>

        <div className="about-content-layout">
          <div className="about-bio-card">
            <h3 className="about-bio-title">
              Hi, I'm a Laravel / PHP Backend Developer
            </h3>
            <p className="about-bio-paragraph">
              With <strong>2.5+ years of hands-on professional experience</strong> developing web applications,
              RESTful APIs, and database-driven systems. Proficient in Laravel, PHP, MySQL, WordPress backend customization,
              payment gateway integration, and website hosting management.
            </p>
            <p className="about-bio-paragraph">
              Currently working as a <strong>Web Developer at iB Arts Pvt. Ltd.</strong>, where I develop backend logic,
              build REST APIs supporting web and mobile clients, implement Stripe payments, and maintain production hosting infrastructure.
            </p>

            <div className="stats-row">
              {stats.map((s) => (
                <div className="stat-box" key={s.label}>
                  <div className="stat-value">{s.number}</div>
                  <div className="stat-desc">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-highlights-grid">
            {highlights.map((h) => (
              <div className="highlight-card" key={h.title}>
                <div className="highlight-icon">{h.icon}</div>
                <h4 className="highlight-title">{h.title}</h4>
                <p className="highlight-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
