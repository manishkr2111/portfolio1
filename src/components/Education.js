export default function Education() {
  const competencies = [
    {
      title: 'Relational Database Design',
      desc: 'Schema normalization, foreign key constraints, indexing strategies, and ACID transaction safety in MySQL.',
      badge: 'Database',
    },
    {
      title: 'REST API Architecture',
      desc: 'Resource-oriented design, request validation, Sanctum/token authentication, and consistent JSON responses.',
      badge: 'API Design',
    },
    {
      title: 'Payment & Wallet Systems',
      desc: 'Stripe subscription checkouts, automated customer billing, idempotent webhook handling, and wallet balances.',
      badge: 'Fintech',
    },
    {
      title: 'Server Operations & Hosting',
      desc: 'AWS EC2 setups, Cloudflare DNS & SSL certificates, aaPanel/cPanel hosting, and SMTP deliverability (SPF/DKIM).',
      badge: 'Infrastructure',
    },
  ];

  return (
    <section className="section section-alt" id="education">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Academic & Foundation</span>
          <h2 className="section-heading">Education & Core Competencies</h2>
          <p className="section-subtext">
            Strong analytical engineering foundation combined with specialized backend software development.
          </p>
        </div>

        <div className="education-layout">
          {/* Main University Degree Card */}
          <div className="education-main-card">
            <div className="education-badge">Graduated 2023</div>

            <div className="education-header-area">
              <div className="education-icon-box">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div>
                <h3 className="education-degree">B.Tech in Electrical Engineering</h3>
                <p className="education-institution">
                  Maulana Abul Kalam Azad University of Technology (MAKAUT)
                </p>
              </div>
            </div>

            <p className="education-desc">
              Completed an intensive 4-year engineering curriculum with focus on analytical problem-solving,
              system modeling, and mathematical logic. Successfully transitioned these rigorous analytical
              principles into modern backend engineering, building reliable web applications and API services.
            </p>

            <div className="education-meta-strip">
              <div className="meta-item">
                <span className="meta-label">Degree</span>
                <span className="meta-val">B.Tech</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Graduation Year</span>
                <span className="meta-val">2023</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Specialization</span>
                <span className="meta-val">Backend Software Eng.</span>
              </div>
            </div>
          </div>

          {/* Competencies Grid */}
          <div className="competencies-grid">
            {competencies.map((c) => (
              <div className="competency-card" key={c.title}>
                <div className="comp-card-top">
                  <h4 className="competency-title">{c.title}</h4>
                  <span className="comp-badge">{c.badge}</span>
                </div>
                <p className="competency-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
