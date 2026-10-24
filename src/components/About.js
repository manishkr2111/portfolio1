export default function About() {
  const stats = [
    { number: '2.5+', label: 'Years Experience' },
    { number: '5+', label: 'Production Platforms' },
    { number: '100%', label: 'Commitment to Quality' },
    { number: 'REST', label: 'API Architecture' },
  ];

  const pillars = [
    {
      step: '01',
      title: 'Database & Data Modeling',
      desc: 'Architecting clean relational schemas in MySQL with optimal indexes, foreign key constraints, and efficient query design.',
      tag: 'MySQL & Relational Design',
    },
    {
      step: '02',
      title: 'Business Logic & Services',
      desc: 'Writing clean, testable PHP and Laravel code using MVC architecture, service classes, jobs, and asynchronous queue workers.',
      tag: 'Laravel & OOP',
    },
    {
      step: '03',
      title: 'Payment & Fintech Systems',
      desc: 'Integrating Stripe checkout, recurring subscription billing, webhook event handlers, and wallet credit debit balances.',
      tag: 'Stripe & Wallet Flows',
    },
    {
      step: '04',
      title: 'Cloud & Infrastructure',
      desc: 'Managing live environments on AWS EC2, Cloudflare CDN/DNS, SSL certificates, cPanel/aaPanel, and SMTP email delivery.',
      tag: 'AWS, Cloudflare & Hosting',
    },
  ];

  return (
    <section className="section section-alt" id="about">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">About Me</span>
          <h2 className="section-heading">Professional Summary</h2>
          <p className="section-subtext">
            Focused on building secure, scalable, and maintainable backend solutions that deliver reliable performance.
          </p>
        </div>

        {/* Bio + Photo Card */}
        <div className="about-bio-card">
          <div className="about-layout-grid">
            <div className="about-photo-col">
              <div className="about-image-card">
                <img
                  src="/images/manish-kumar.jpg"
                  alt="Manish Kumar"
                  className="about-portrait-img"
                />
                <div className="about-image-caption">
                  <span className="caption-name">Manish Kumar</span>
                  <span className="caption-role">Web Developer · iB Arts Pvt. Ltd.</span>
                </div>
              </div>
            </div>

            <div className="about-bio-inner">
              <div className="about-bio-badge">
                <span className="dot-pulse" />
                <span>Full-time Web Developer at iB Arts Pvt. Ltd. (2023 – Present)</span>
              </div>

              <h3 className="about-bio-title">
                Crafting Scalable Backend Systems & REST APIs
              </h3>

              <p className="about-bio-paragraph">
                Laravel / PHP Backend Developer with <strong>2.5+ years of experience</strong> developing web applications,
                RESTful APIs, and database-driven systems. Proficient in Laravel, PHP, MySQL, WordPress backend customization,
                payment gateway integration, and website hosting management. Focused on building secure, scalable, and
                maintainable backend solutions that deliver reliable performance.
              </p>

              <p className="about-bio-paragraph">
                At <strong>iB Arts Pvt. Ltd.</strong>, I actively engineer and maintain backend modules for client platforms,
                integrate third-party services including Stripe and Cloudflare, manage domain hosting and email deliverability
                (SPF, DKIM, SMTP), and ensure smooth production deployments.
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
          </div>
        </div>

        {/* 4 Pillars of Backend Engineering */}
        <div className="pillars-container">
          <div className="pillars-header">
            <h4 className="pillars-title">Core Backend Engineering Pillars</h4>
            <p className="pillars-subtitle">My systematic approach to building production-grade web systems.</p>
          </div>

          <div className="pillars-grid">
            {pillars.map((p) => (
              <div className="pillar-card" key={p.step}>
                <div className="pillar-top">
                  <span className="pillar-step">{p.step}</span>
                  <span className="pillar-tag">{p.tag}</span>
                </div>
                <h5 className="pillar-name">{p.title}</h5>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
